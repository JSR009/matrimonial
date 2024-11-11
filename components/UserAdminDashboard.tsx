"use client";

import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { doc, collection, getDocs, deleteDoc, updateDoc, addDoc, getDoc } from "firebase/firestore";
import {  FaPlus, FaTimes, FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface RegistrationFormData {
  id?: string;
  gender: string;
  name: string;
  dob: string;
  placeOfBirth: string;
  timeOfBirth: string;
  height: string;
  complexion: string;
  caste: string;
  occupation: string;
  income: string;
  education: string;
  fathersName: string;
  fathersOccupation: string;
  mothersName: string;
  mothersOccupation: string;
  siblings: string;
  maritalStatus: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  profilePicture: string;
  portfolioImages: string[];
}

const AdminDashboard = () => {
  const [data, setData] = useState<RegistrationFormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<RegistrationFormData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as RegistrationFormData));
    setData(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    try {
      // Create a reference to the document with the provided ID
      const documentRef = doc(db, "users", id);
  
      // Check if the document actually exists before attempting to delete
      const docSnap = await getDoc(documentRef);
      if (!docSnap.exists()) {
        setNotification("Entry does not exist.");
        return;
      }
  
      // Delete the document
      await deleteDoc(documentRef);
      setNotification("Entry deleted successfully.");
  
      // Refresh the data to update the UI
      await fetchData();
    } catch (error) {
      console.error("Error deleting entry:", error);
      setNotification("Error deleting entry.");
    }
  };
  




  const handleEdit = (entry: RegistrationFormData) => {
    reset(entry);
    setSelectedId(entry.id || null);
    setEditMode(true);
    setModalOpen(true);
  };

  const handleNewEntry = () => {
    reset();
    setSelectedId(null);
    setEditMode(false);
    setModalOpen(true);
  };

  const onSubmit = async ( data: RegistrationFormData) => {
    setLoading(true);
    try {
      if (editMode && selectedId) {
        await updateDoc(doc(db, "users", selectedId), data as  { [key: string]: any } );
        setNotification("Entry updated successfully.");
      } else {
        await addDoc(collection(db, "users"), data);
        setNotification("New entry added successfully.");
      }
      setModalOpen(false);
      fetchData();
    } catch (error) {
      setNotification("Error saving entry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>
      <button
        onClick={handleNewEntry}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600 flex items-center"
      >
        <FaPlus className="mr-2" /> New Entry
      </button>
      {loading && <FaSpinner className="animate-spin text-center" />}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded shadow-lg">
          <p>{notification}</p>
          <button onClick={() => setNotification(null)} className="text-white text-xl ml-4">
            <FaTimes />
          </button>
        </div>
      )}
      <div className="overflow-x-auto">
  <table className="w-full table-auto border border-gray-300 bg-white">
    <thead>
      <tr className="bg-gray-200 text-gray-700">
        <th className="border p-2">Profile Picture</th>
        <th className="border p-2">Gender</th>
        <th className="border p-2">Name</th>
        <th className="border p-2">DOB</th>
        <th className="border p-2">Place of Birth</th>
        <th className="border p-2">Time of Birth</th>
        <th className="border p-2">Height</th>
        <th className="border p-2">Complexion</th>
        <th className="border p-2">Caste</th>
        <th className="border p-2">Occupation</th>
        <th className="border p-2">Income</th>
        <th className="border p-2">Education</th>
        <th className="border p-2">Father's Name</th>
        <th className="border p-2">Father's Occupation</th>
        <th className="border p-2">Mother's Name</th>
        <th className="border p-2">Mother's Occupation</th>
        <th className="border p-2">Siblings</th>
        <th className="border p-2">Marital Status</th>
        <th className="border p-2">Phone</th>
        <th className="border p-2">Email</th>
        <th className="border p-2">Address</th>
        <th className="border p-2">Password</th>
        <th className="border p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(entry => (
        <tr key={entry.email} className="text-gray-700 hover:bg-gray-100 transition">
          <td className="border p-2">
            <Image src={entry.profilePicture} height={50} width={50} alt="Profile" className="h-10 w-10 rounded-full object-cover mx-auto" />
          </td>
          <td className="border p-2">{entry.gender}</td>
          <td className="border p-2">{entry.name}</td>
          <td className="border p-2">{entry.dob}</td>
          <td className="border p-2">{entry.placeOfBirth}</td>
          <td className="border p-2">{entry.timeOfBirth}</td>
          <td className="border p-2">{entry.height}</td>
          <td className="border p-2">{entry.complexion}</td>
          <td className="border p-2">{entry.caste}</td>
          <td className="border p-2">{entry.occupation}</td>
          <td className="border p-2">{entry.income}</td>
          <td className="border p-2">{entry.education}</td>
          <td className="border p-2">{entry.fathersName}</td>
          <td className="border p-2">{entry.fathersOccupation}</td>
          <td className="border p-2">{entry.mothersName}</td>
          <td className="border p-2">{entry.mothersOccupation}</td>
          <td className="border p-2">{entry.siblings}</td>
          <td className="border p-2">{entry.maritalStatus}</td>
          <td className="border p-2">{entry.phone}</td>
          <td className="border p-2">{entry.email}</td>
          <td className="border p-2">{entry.address}</td>
          <td className="border p-2">{entry.password}</td>
          <td className="border p-2 flex space-x-2 justify-center">
            <button onClick={() => handleEdit(entry)} className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
            >
             Edit
            </button>
            <button
              onClick={() => entry.id && handleDelete(entry.id)}
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Modal */}
      {modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto mt-10 relative">
      <h2 className="text-xl font-semibold mb-4 text-center">{editMode ? "Edit Entry" : "New Entry"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-3">
          <input {...register("gender")} placeholder="Gender" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("name")} placeholder="Name" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("dob")} placeholder="Date of Birth" type="date" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("placeOfBirth")} placeholder="Place of Birth" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("timeOfBirth")} placeholder="Time of Birth" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("height")} placeholder="Height" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("complexion")} placeholder="Complexion" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("caste")} placeholder="Caste" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("occupation")} placeholder="Occupation" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("income")} placeholder="Income" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("education")} placeholder="Education" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("fathersName")} placeholder="Father's Name" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("fathersOccupation")} placeholder="Father's Occupation" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("mothersName")} placeholder="Mother's Name" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("mothersOccupation")} placeholder="Mother's Occupation" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("siblings")} placeholder="Siblings" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("maritalStatus")} placeholder="Marital Status" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("phone")} placeholder="Phone" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("email")} placeholder="Email" type="email" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("password")} placeholder="Password" type="password" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("confirmPassword")} placeholder="Confirm Password" type="password" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
          <input {...register("address")} placeholder="Address" className="border p-2 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white w-full p-2 mt-4 rounded hover:bg-blue-600 transition">
          {editMode ? "Update Entry" : "Add Entry"}
        </button>
      </form>
      <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
        <FaTimes />
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default AdminDashboard;
