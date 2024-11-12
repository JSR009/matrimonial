"use client";
import { useEffect, useState } from "react";
import { FaCamera, FaEdit } from "react-icons/fa";
import jwt, { JwtPayload } from "jsonwebtoken";
import Cookies from "js-cookie";
import Image from "next/image";
import { db, storage } from "@/firebaseConfig";
import { collection, doc, onSnapshot, query, where, updateDoc, getDocs } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

type User = {
  id?: string; // Add this line to include 'id' as an optional property
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<User>>({});
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);
  const [matches, setMatches] = useState<User[]>([]); // State for matches


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

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) return;
  
    const decodedToken = jwt.decode(token) as JwtPayload | null;
    const email = decodedToken?.email;
    if (!email) return;
  
    const userQuery = query(collection(db, "users"), where("email", "==", email));
  
    const unsubscribe = onSnapshot(userQuery, (snapshot) => {
      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data() as User;
        docData.id = snapshot.docs[0].id; // Add this line to save the document ID.
        setUser(docData);
        fetchMatches(docData);
      }
      
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  
  const fetchMatches = async (currentUser: User) => {
    try {
      const genderPreference = currentUser.gender === "Male" ? "Female" : "Male";
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - currentUser.preferredMinAge);

      const matchesQuery = query(
        collection(db, "users"),
        where("gender", "==", genderPreference),
        where("birthDate", "<=", minAgeDate)
      );

      const matchesSnapshot = await getDocs(matchesQuery);
      const fetchedMatches: User[] = matchesSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })) as User[];

      setMatches(fetchedMatches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };


  const handleEditToggle = () => {
    setEditData(user || {});
    setIsEditing(!isEditing);
  };

  const handleInputChange = (key: keyof User, value: string) => {
    setEditData((prev) => ({ ...prev, [key]: value }));
  };

  const handleProfileUpdate = async () => {
    if (!user || !user.email || !user.id) return; // Ensure user, email, and id are defined
  
    try {
      const userDocRef = doc(db, "users", user.id); // Use `user.id` as the document ID
      await updateDoc(userDocRef, editData);
  
      setUser((prev) => (prev ? { ...prev, ...editData } : prev));
      setEditData({});
      Cookies.set("userProfile", JSON.stringify({ ...user, ...editData }), { expires: 7 });
  
      setUpdateMessage("Your details have been successfully updated!");
      setTimeout(() => setUpdateMessage(null), 3000);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  
  const handleImageUpload = async (file: File, path: string) => {
    if (!user || !user.email) return;
    const storageRef = ref(storage, path);

    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateDoc(doc(db, "users", user.email), { profileImage: downloadURL });

      setUser((prev) => prev ? { ...prev, profileImage: downloadURL } : prev);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found. Please log in again.</p>;

  return (
    <div className="container mx-auto px-4 py-10 space-y-8 mt-8">
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-8 rounded-lg shadow-lg text-white flex items-center justify-center flex-col">
        <div className="relative w-40 h-40 mb-4">
          <Image
            src={user.profileImage || user.portfolioImages[0] || "/images/default-profile.png"}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg"
            width={100}
            height={100}
          />
          <label className="absolute bottom-2 right-2 p-1 bg-white text-gray-700 rounded-full cursor-pointer">
            <FaCamera />
            <input type="file" onChange={(e) => e.target.files && handleImageUpload(e.target.files[0], `profileImages/${user.email}`)} hidden />
          </label>
        </div>
        <h2 className="text-3xl font-semibold">{user.name || "No name provided"}</h2>
        <p>{user.email || "No email provided"}</p>
        <button onClick={handleEditToggle} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md flex items-center space-x-2">
          <FaEdit />
          <span>Edit Profile</span>
        </button>
      </div>

      {updateMessage && <div className="bg-green-500 text-white text-center p-4 rounded-md">{updateMessage}</div>}

      {isEditing && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg h-3/4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            {profileFields.map(({ label, key }) => (
              <div key={key} className="mb-4">
                <label className="block text-gray-700">{label}</label>
                <input
                  type="text"
                  value={(editData[key] as string) || ""}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            ))}
            <div className="flex justify-end space-x-4 mt-4">
              <button onClick={handleEditToggle} className="px-4 py-2 bg-gray-400 text-white rounded-md">
                Cancel
              </button>
              <button onClick={handleProfileUpdate} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold">Profile Details</h2>
        <div className="grid grid-cols-2 gap-4">
        {profileFields.map(({ label, key }) => (
          <div key={key} className="flex justify-between bg-gray-100 p-3 rounded-md">
            <span className="font-medium text-gray-700">{label}:</span>
            <span className="text-gray-900">
              {user[key] instanceof Date
                ? user[key].toLocaleDateString() // Format the Date if it's a Date object
                : user[key] !== undefined
                ? String(user[key]) // Convert to string if it's not undefined
                : "Not provided"}
            </span>
          </div>
        ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold">Portfolio Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {user.portfolioImages && user.portfolioImages.length > 0 ? (
            user.portfolioImages.map((img, index) => (
              <Image key={index} src={img} alt={`Portfolio ${index + 1}`} width={150} height={150} className="rounded-md object-cover" />
            ))
          ) : (
            <p>No portfolio images available.</p>
          )}
        </div>
        {/* <label className="block mt-4">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">Upload New Image</span>
          <input
            type="file"
            onChange={(e) =>
              e.target.files && handleImageUpload(e.target.files[0], `portfolioImages/${user.email}/${Date.now()}`)
            }
            hidden
          />
        </label> */}
      </div>

        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold"> Matches</h2>
        {matches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map((match) => (
              <div key={match.email} className="border p-4 rounded-lg shadow-sm">
                <Image
                  src={match.profileImage || "/images/default-profile.png"}
                  alt="Match Profile"
                  width={100}
                  height={100}
                  className="rounded-full mb-2"
                />
                <h3 className="text-xl font-semibold">{match.name}</h3>
                <p>Age: {Math.floor((new Date().getFullYear() - new Date(match.birthDate).getFullYear()))}</p>
                <p>Occupation: {match.occupation || "N/A"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No matches found. Try adjusting your preferences.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Profile;
