"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

interface Contact {
  id?: string;
  fullName: string;
  email: string;
  age: number;
  phoneNumber: string;
  city: string;
  gender: string;
  message?: string; // Optional property
  maritalStatus: string;
}

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<Contact>({
    fullName: "",
    email: "",
    age: 0,
    phoneNumber: "",
    city: "",
    gender: "",
    message: "", // Initialize as an empty string
    maritalStatus: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "matrimonialContacts"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Contact[];
      setContacts(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleAddContact = async () => {
    try {
      // Create a Firestore-compatible object
      const firestoreData = {
        fullName: formData.fullName,
        email: formData.email,
        age: formData.age,
        phoneNumber: formData.phoneNumber,
        city: formData.city,
        gender: formData.gender,
        message: formData.message || "", // Provide default value for optional fields
        maritalStatus: formData.maritalStatus,
      };

      if (editingId) {
        const contactRef = doc(db, "matrimonialContacts", editingId);
        await updateDoc(contactRef, firestoreData);
        setEditingId(null);
      } else {
        await addDoc(collection(db, "matrimonialContacts"), firestoreData);
      }

      // Reset form data after successful submission
      setFormData({
        fullName: "",
        email: "",
        age: 0,
        phoneNumber: "",
        city: "",
        gender: "",
        message: "", // Reset message as well
        maritalStatus: "",
      });

      setShowForm(false);
    } catch (error) {
      console.error("Error adding/updating contact:", error);
    }
  };

  const handleDelete = async (id?: string) => {
    if (id) {
      const contactRef = doc(db, "matrimonialContacts", id);
      await deleteDoc(contactRef);
    }
  };

  const handleEdit = (contact: Contact) => {
    setEditingId(contact.id || null);
    setFormData({
      fullName: contact.fullName,
      email: contact.email,
      age: contact.age,
      phoneNumber: contact.phoneNumber,
      city: contact.city,
      gender: contact.gender,
      message: contact.message || "", // Handle optional property
      maritalStatus: contact.maritalStatus,
    });
    setShowForm(true);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <button
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => {
          setShowForm(true);
          setEditingId(null);
        }}
      >
        Add User
      </button>

      {showForm && (
        <div className="mb-6">
          <h2 className="text-2xl mb-4">{editingId ? "Edit Contact" : "Add New Contact"}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddContact();
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {editingId ? "Update Contact" : "Add Contact"}
            </button>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Age</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">City</th>
              <th className="py-3 px-4 text-left">Gender</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Marital Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id} className="border-b">
                <td className="py-2 px-4">{contact.fullName}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.age}</td>
                <td className="py-2 px-4">{contact.phoneNumber}</td>
                <td className="py-2 px-4">{contact.city}</td>
                <td className="py-2 px-4">{contact.gender}</td>
                <td className="py-2 px-4">{contact.message}</td>
                <td className="py-2 px-4">{contact.maritalStatus}</td>
                <td className="py-2 px-4">
                  <div className="flex">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                      onClick={() => handleEdit(contact)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
