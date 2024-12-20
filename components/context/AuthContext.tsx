import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { db } from "@/firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

interface UserType {
  name?: string;
  email?: string;
  dob?: string;
  gender?: string;
  caste?: string;
  height?: string;
  income?: string;
  maritalStatus?: string;
  occupation?: string;
  complexion?: string;
  education?: string;
  fathersName?: string;
  mothersName?: string;
  phone?: string;
  placeOfBirth?: string;
  profileImage?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const router = useRouter();

  const fetchMatches = useCallback(async (userData: UserType) => {
    try {
      const q = query(collection(db, "users"), where("maritalStatus", "==", "Single"));
      const querySnapshot = await getDocs(q);
      const matches = querySnapshot.docs
        .map((doc) => doc.data() as UserType)
        .filter((data) => data.gender !== userData.gender);
      setUser((prev) => (prev ? { ...prev, matches } : null));
    } catch (err) {
      console.error("Error fetching matches:", err);
    }
  }, []);

  const fetchUserProfile = useCallback(async () => {
    if (!token) return;
    try {
      const userDoc = await getDoc(doc(db, "users", "your-user-id"));
      if (userDoc.exists()) {
        const userData = userDoc.data() as UserType;
        setUser(userData);
        fetchMatches(userData);
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  }, [token, fetchMatches]);

  useEffect(() => {
    const savedToken = Cookies.get("token");
    if (savedToken) {
      setToken(savedToken);
      fetchUserProfile();
    }
    setHydrated(true);
  }, [fetchUserProfile]);

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
