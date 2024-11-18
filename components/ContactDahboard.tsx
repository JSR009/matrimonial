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
import { FaPlus } from "react-icons/fa";

interface FormData {
  id?: string;
  fullName: string;
  email: string;
  dob: string; // Changed from age to dob
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
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
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
      dob: "",
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

  // Open confirmation modal for deletion
  const handleDeleteConfirmation = (id: string) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  // Delete entry from Firestore
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteDoc(doc(db, "matrimonialContacts", deleteId));
      setFormDataList(formDataList.filter((data) => data.id !== deleteId));
      setSuccessMessage("Entry deleted successfully.");
    } catch (error) {
      console.error("Error deleting entry:", error);
      setErrorMessage("Failed to delete entry.");
    } finally {
      setDeleteId(null);
      setShowDeleteModal(false);
    }
  };

  // Handle modal form submission for new or edited entry
  const handleModalSubmit = async (data: FormData) => {
    try {
      if (isEditing && currentData?.id) {
        await updateDoc(doc(db, "matrimonialContacts", currentData.id), data as never);
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
    <div className="px-4 py-10 mt-20 ml-7">
      <div className="items-center mb-6">
        <h1 className="text-2xl font-bold text-center mb-4">Numerology Data</h1>
        <button
          onClick={handleNewEntry}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600 flex items-center"
        >
          <FaPlus className="mr-2" /> New Entry
        </button>
      </div>

      {/* Success or error message */}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Full Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Date of Birth</th>
              <th className="px-6 py-3">Phone Number</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Marital Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((data, index) => (
              <tr key={data.id} className="border-b">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{data.fullName}</td>
                <td className="px-6 py-3">{data.email}</td>
                <td className="px-6 py-3">{data.dob}</td>
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
                    onClick={() => handleDeleteConfirmation(data.id!)}
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this entry?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactAdminDashboard;
