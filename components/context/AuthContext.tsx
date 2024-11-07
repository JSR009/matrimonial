import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { db } from "@/firebaseConfig"; // Firestore import
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any; // Replace with your actual user type
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null); // State for storing user data
  const [hydrated, setHydrated] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    const savedToken = Cookies.get("token");
    if (savedToken) {
      setToken(savedToken);
      fetchUserProfile(); // Fetch user profile when token is found
    }
    setHydrated(true);
  }, []);

  const fetchUserProfile = async () => {
    if (!token) return;
    try {
      const userDoc = await getDoc(doc(db, "users", "your-user-id")); // Replace "your-user-id" with actual user ID (e.g., user email or UID)
      if (userDoc.exists()) {
        setUser(userDoc.data());
        fetchMatches(userDoc.data());
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  const fetchMatches = async (userData: any) => {
    try {
      const q = query(collection(db, "users"), where("maritalStatus", "==", "Single"));
      const querySnapshot = await getDocs(q);
      const matches = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((data) => data.gender !== userData.gender);
      setUser((prev: any) => ({ ...prev, matches }));
    } catch (err) {
      console.error("Error fetching matches:", err);
    }
  };

  const login = (newToken: string) => {
    Cookies.set("token", newToken, { expires: 30, sameSite: "lax", path: "/", secure: process.env.NODE_ENV === "production" });
    setToken(newToken);
    fetchUserProfile(); 
    router.push("/profile");
  };

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
    router.push("/login");
  };

  if (!hydrated) return null;

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
