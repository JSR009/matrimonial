"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import Modal from "./Modal";

interface FormData {
  id?: string;
  fullName: string;
  email: string;
  age: string;
  phoneNumber: string;
  city: string;
  gender: string;
  message: string;
  maritalStatus: string;
}

const ContactAdminDashboard: React.FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [currentData, setCurrentData] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "matrimonialContacts"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFormDataList(data as FormData[]);
    };

    fetchData();
  }, []);

  // Open modal for new entry
  const handleNewEntry = () => {
    setCurrentData({
      fullName: "",
      email: "",
      age: "",
      phoneNumber: "",
      city: "",
      gender: "",
      message: "",
      maritalStatus: "",
    });
    setIsEditing(false);
    setShowModal(true);
  };

  // Open modal for editing existing entry
  const handleEdit = (data: FormData) => {
    setCurrentData(data);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete entry from Firestore
  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "matrimonialContacts", id));
      setFormDataList(formDataList.filter((data) => data.id !== id));
      setSuccessMessage("Entry deleted successfully.");
    } catch (error) {
      console.error("Error deleting entry:", error);
      setErrorMessage("Failed to delete entry.");
    }
  };

  // Handle modal form submission for new or edited entry
  const handleModalSubmit = async (data: FormData) => {
    try {
      if (isEditing && currentData?.id) {
        await updateDoc(doc(db, "matrimonialContacts", currentData.id), data as  { [key: string]: any });
        setFormDataList(
          formDataList.map((item) =>
            item.id === currentData.id ? { ...item, ...data } : item
          )
        );
      } else {
        const docRef = await addDoc(collection(db, "matrimonialContacts"), data);
        setFormDataList([...formDataList, { ...data, id: docRef.id }]);
      }
      setSuccessMessage("Entry saved successfully.");
      setShowModal(false);
    } catch (error) {
      console.error("Error saving entry:", error);
      setErrorMessage("Failed to save entry.");
    }
  };

  return (
    <div className="px-4 py-10 mt-20">
      <div className=" items-center mb-6">
        <button
          onClick={handleNewEntry}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Entry
        </button>
      </div>

      {/* Success or error message */}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Marital Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((data) => (
              <tr key={data.id} className="border-b">
                <td className="px-6 py-3">{data.fullName}</td>
                <td className="px-6 py-3">{data.email}</td>
                <td className="px-6 py-3">{data.age}</td>
                <td className="px-6 py-3">{data.phoneNumber}</td>
                <td className="px-6 py-3">{data.city}</td>
                <td className="px-6 py-3">{data.gender}</td>
                <td className="px-6 py-3">{data.message}</td>
                <td className="px-6 py-3">{data.maritalStatus}</td>
                <td className="px-6 py-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(data)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
  onClick={() => data.id && handleDelete(data.id)}
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

      {/* Modal for adding or editing entry */}
      {showModal && (
        <Modal
          data={currentData}
          onClose={() => setShowModal(false)}
          onSave={handleModalSubmit}
        />
      )}
    </div>
  );
};

export default ContactAdminDashboard;
