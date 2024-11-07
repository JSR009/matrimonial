"use client";
import { useEffect, useState } from "react";
import { FaEdit, FaCamera, FaHeart, FaTrash } from "react-icons/fa";
import { useAuth } from "@/components/context/AuthContext";
import jwt, { JwtPayload } from "jsonwebtoken";
import Cookies from "js-cookie";
import Image from "next/image";
import { db, storage } from "@/firebaseConfig";
import {  collection, query, where, getDocs } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL, deleteObject } from "firebase/storage";



type User = {
  birthDate: string | number | Date;
  preferredMinAge: number;
  name: string;
  email: string | undefined;
  dob?: string;
  gender?: string;
  caste?: string;
  height: string;
  income?: string;
  maritalStatus?: string;
  occupation: string;
  complexion?: string;
  education?: string;
  fathersName?: string;
  mothersName?: string;
  phone?: string;
  placeOfBirth?: string;
  profileImage?: string;
  portfolioImages: string[];
};

const Profile = () => {
  const { logout } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [matches, setMatches] = useState<User[]>([]);
  const [editMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visibleContacts, setVisibleContacts] = useState<{ [key: string]: boolean }>({});



  const profileFields: { label: string; key: keyof User }[] = [
    { label: "Date of Birth", key: "dob" },
    { label: "Gender", key: "gender" },
    { label: "Caste", key: "caste" },
    { label: "Height", key: "height" },
    { label: "Income", key: "income" },
    { label: "Marital Status", key: "maritalStatus" },
    { label: "Occupation", key: "occupation" },
    { label: "Complexion", key: "complexion" },
    { label: "Education", key: "education" },
    { label: "Father's Name", key: "fathersName" },
    { label: "Mother's Name", key: "mothersName" },
    { label: "Phone", key: "phone" },
    { label: "Place of Birth", key: "placeOfBirth" }
  ];
  const fetchUserData = async () => {
    setLoading(true);
    try {
      // Extract token from cookies
      const token = Cookies.get("authToken");
      if (!token) throw new Error("No token found");
  
      // Decode the token to retrieve email, using type assertion to ensure correct type
      const decodedToken = jwt.decode(token) as JwtPayload | null;
      const email = decodedToken?.email as string | undefined;
  
      if (!email) throw new Error("Email not found in token");
  
      // Query Firestore based on email
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // Use type assertion to treat `userData` as a `User`
        const userData = querySnapshot.docs[0].data() as User;
        setUser(userData);
      } else {
        console.error("No user found with this email.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  
  const fetchMatches = async () => {
    if (!user) return;
    try {
      const userDob = user.dob ?? "1970-01-01"; // Fallback if dob is undefined
      const userAge = calculateAge(userDob);
  
      const matchesQuery = query(
        collection(db, "users"),
        where("gender", "==", user.gender === "Male" ? "Female" : "Male"),
        where("caste", "==", user.caste),
        // Add more criteria if needed
      );
  
      const querySnapshot = await getDocs(matchesQuery);
      const filteredMatches = querySnapshot.docs
        .map((doc) => doc.data() as User)
        .filter((match) => match.dob ? calculateAge(match.dob) === userAge : false); // Filter undefined dob
  
      setMatches(filteredMatches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };
  

 
  


  const handleEditClick = () => {
    if (user) {
      
    } else {
      console.error("User data is missing.");
    }
  };
  
  // Update form data in the modal
 

  // Save changes to Firebase
  const handleSaveChanges = async () => {
    try {
      
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  
  
  

  const handleImageUpload = async (file: File, path: string, key: keyof User) => {
    try {
      const imageRef = ref(storage, path);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);
      setUser((prev) => prev && { ...prev, [key]: imageUrl });
      await handleSaveChanges();
      await fetchUserData(); // Fetch updated user data after saving changes
    } catch (error) {
      console.error(`Error uploading ${key}:`, error);
    }
  };
  
  // Rendering Profile Image with cache-busting query parameter
  <Image
    key={user?.profileImage}
    src={`${user?.profileImage}?${new Date().getTime()}`}
    alt="Profile"
    className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
    width={100}
    height={100}
  />
  

  const handlePortfolioImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 4);
    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const imageRef = ref(storage, `portfolioImages/${user?.email}/${file.name}`);
          await uploadBytes(imageRef, file);
          return getDownloadURL(imageRef);
        })
      );
      setUser((prev) => prev && { ...prev, portfolioImages: [...(prev.portfolioImages || []), ...uploadedUrls] });
      await handleSaveChanges();
    } catch (error) {
      console.error("Error uploading portfolio images:", error);
    }
  };

  const toggleContactVisibility = (email: string) => {
    setVisibleContacts((prev) => ({
      ...prev,
      [email]: !prev[email],
    }));
  };

  const removePortfolioImage = async (url: string) => {
    try {
      const imageRef = ref(storage, url);
      await deleteObject(imageRef);
      setUser((prev) => prev && { ...prev, portfolioImages: prev.portfolioImages.filter((img) => img !== url) });
      await handleSaveChanges();
    } catch (error) {
      console.error("Error deleting portfolio image:", error);
    }
  };
  

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user) fetchMatches();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found. Please log in again.</p>;


  return (
    <div className="container mx-auto px-4 py-10 space-y-8 mt-8">
       
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-8 rounded-lg shadow-lg text-white flex items-center justify-center flex-col">
        <div className="relative w-40 h-40 mb-4">
        <Image
            src={user?.portfolioImages[0] || "/images/default-profile.png"}
            alt="Profile"
            className="rounded-full w-24 h-24 sm:w-full sm:h-full object-cover border-4 border-white shadow-lg"
            width={100}
            height={100}
          />

          <label className="absolute bottom-2 right-2 p-1 bg-white text-gray-700 rounded-full cursor-pointer">
            <FaCamera />
            <input type="file" onChange={(e) => e.target.files && handleImageUpload(e.target.files[0], `profileImages/${user.email}`, "profileImage")} hidden />
          </label>
        </div>
        <h2 className="text-3xl font-semibold">{user.name || "No name provided"}</h2>
        <p>{user.email || "No email provided"}</p>
        <button
        onClick={handleEditClick}
        className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-100 transition-all"
      >
        <FaEdit className="inline mr-2" /> Edit Profile
      </button>

      {/* Render Edit Modal */}
    
      </div>

      {/* Profile Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profileFields.map(({ label, key }) => (
            <div key={key} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-700">{label}</h3>
              {editMode ? (
              <input
                className="mt-2 border border-gray-300 p-2 w-full rounded-lg focus:ring focus:ring-indigo-300"
                value={
                  user[key] instanceof Date
                    ? user[key].toISOString().split("T")[0] // Convert Date to string (only date part)
                    : (user[key] as string | number | readonly string[] | undefined) // Type assertion for other types
                }
                onChange={(e) =>
                  setUser((prev) => prev && { ...prev, [key]: e.target.value })
                }
              />
            ) : (
              <p className="text-gray-600 mt-2">
                {user[key] instanceof Date
                  ? user[key].toLocaleDateString() // Display Date as a formatted string
                  : user[key] || "Not specified"}
              </p>
            )}

            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Images */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Portfolio Images</h3>
        <input type="file" multiple onChange={handlePortfolioImagesChange} />
        <div className="flex space-x-4 mt-4">
          {user.portfolioImages.map((src, index) => (
            <div key={index} className="relative">
              <Image src={src} alt={`Portfolio ${index + 1}`} width={100} height={100} className="w-24 h-24 sm:w-full sm:h-full object-cover border-4 rounded-md shadow-md" />
              <button className="absolute top-1 right-1 text-red-600" onClick={() => removePortfolioImage(src)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Matches Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
  <h3 className="text-xl font-semibold mb-4 text-gray-700">Matching Profiles</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {matches
      .filter((match) => match.email !== user?.email) // Exclude user's profile
      .map((match) => (
        <div key={match.email} className="p-4 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-md text-white flex flex-col items-center">
          <Image
            src={match.portfolioImages[0] || "/images/default-profile.png"}
            alt={match.name}
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
          <h4 className="text-lg font-semibold mt-2">{match.name}</h4>
          <p>{match.occupation}</p>
          <p>Height: {match.height}</p>
          <p>Caste: {match.caste}</p>
          <button
          className="mt-4 bg-white text-blue-600 py-1 px-4 rounded-lg shadow-md hover:bg-blue-100 flex items-center justify-center"
          onClick={() => match.email && toggleContactVisibility(match.email)} // Ensure match.email is not undefined
        >
          {match.email && visibleContacts[match.email] ? ( // Check that match.email is not undefined
            <span>{match.phone || "No contact available"}</span>
          ) : (
            <>
              <FaHeart className="mr-2" /> <span>Show Contact</span>
            </>
          )}
        </button>


        </div>
      ))}
  </div>
</div>


      {/* Logout Button */}
      <div className="flex justify-center">
        <button onClick={logout} className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile; 


