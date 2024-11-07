import React, { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

interface UserData {
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
  }

const EditProfileModal = ({ isOpen, onClose, userId }:any) => {
    const [userData, setUserData] = useState<UserData>({});
    const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);


  const profileFields = [
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
    if (isOpen && userId) {
      fetchUserData();
    } else if (isOpen && !userId) {
      
      console.error("User ID is missing.");
    }
  }, [isOpen, userId]);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
  
    try {
      if (!userId) {
        throw new Error("User ID is missing or invalid.");
      }
  
      const userDocRef = doc(db, "users", userId);
      const docSnap = await getDoc(userDocRef);
  
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        console.log("Fetched user data:", data);
      } else {
        const message = `No user data found for ID: ${userId}`;
        console.error(message);
      }
    } catch (err:any) {
      console.log("Error object:", err); // Logs entire error object
      const errorMessage = `Error fetching user data: ${
        typeof err.message === "string" ? err.message : JSON.stringify(err)
      }`;
     
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, { ...userData });
      setSuccess(true);
    } catch (err) {
    
      console.error("Error updating profile:", err);
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleChange = (key:any, value:any) => {
    setUserData((prevData) => ({ ...prevData, [key]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl font-semibold mb-4 text-black">Edit Profile</h2>

        {success && (
          <p className="text-green-500 text-sm mb-4">
            Your information has been successfully updated!
          </p>
        )}

        {loading ? (
          <p className="text-gray-500 text-sm">Loading user data...</p>
        ) : (
          profileFields.map(({ label, key }) => (
            <div key={key} className="mb-4">
              <label className="block font-semibold text-gray-700">{label}</label>
              <input
                type="text"
                value={userData[key as keyof UserData] || ""} // Type assertion to prevent error
                onChange={(e) => handleChange(key, e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 text-black"
              />
            </div>
          ))
        )}

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
