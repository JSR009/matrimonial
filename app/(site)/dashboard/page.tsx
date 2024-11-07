"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";

interface Contact {
  id?: string;
  fullName: string;
  email: string;
  age: number;
  phoneNumber: string;
  city: string;
  gender: string;
  message?: string;
  maritalStatus: string;
}


interface User {
  id?: string;
  name: string;
  email: string;
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
}

const AdminDashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<Contact | User>({
  
    fullName: "",
    email: "",
    age: 0,
    phoneNumber: "",
    city: "",
    gender: "",
    maritalStatus: "",
    message: "",
  } as Contact );

  

  const [editingId, setEditingId] = useState<string | null>(null);
  const [collectionName, setCollectionName] = useState<"matrimonialContacts" | "users">("matrimonialContacts");
  const [showForm, setShowForm] = useState<boolean>(false);

  // Fetch matrimonialContacts
  useEffect(() => {
    const unsubscribeContacts = onSnapshot(collection(db, "matrimonialContacts"), (snapshot) => {
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Contact[]);
      setLoading(false);
    });
    return () => unsubscribeContacts();
  }, []);

  // Fetch users
  useEffect(() => {
    const unsubscribeUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[]);
      setLoading(false);
    });
    return () => unsubscribeUsers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const resetForm = () => {
    setFormData({} as Contact | User);
    setEditingId(null);
    setShowForm(false);
  };
  
  // Modify handleAddOrUpdate
  const handleAddOrUpdate = async () => {
    try {
      if (editingId) {
        const docRef = doc(db, collectionName, editingId);
        await updateDoc(docRef, { ...formData });
      } else {
        const collectionRef = collection(db, collectionName);
        if (collectionName === "matrimonialContacts" && isContact(formData)) {
          await addDoc(collectionRef, formData);
        } else if (collectionName === "users" && !isContact(formData)) {
          await addDoc(collectionRef, formData);
        }
      }
      resetForm();
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };
  
  
  
  

  const handleDelete = async (id?: string) => {
    if (id) {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    }
  };

  const handleEdit = (data: Contact | User, collection: "matrimonialContacts" | "users") => {
    setEditingId(data.id || null);
    setFormData(data);
    setCollectionName(collection);
    setShowForm(true);
  };

  const isContact = (data: Contact | User): data is Contact => {
    return 'fullName' in data;
  };
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <button
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => {
          setShowForm(true);
          setEditingId(null);
          setCollectionName("matrimonialContacts"); // Default to contacts
        }}
      >
        Add New Entry
      </button>

      {showForm && (
  <div className="mb-6">
    <h2 className="text-2xl mb-4">{editingId ? "Edit Entry" : "Add New Entry"}</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleAddOrUpdate(); }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {collectionName === "matrimonialContacts" && isContact(formData) ? (
        <>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="number" name="age" placeholder="Age" value={formData.age || 0} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="city" placeholder="City" value={formData.city || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="gender" placeholder="Gender" value={formData.gender || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="maritalStatus" placeholder="Marital Status" value={formData.maritalStatus || ''} onChange={handleChange} required className="p-2 border rounded" />
          <textarea name="message" placeholder="Message" value={formData.message || ''} onChange={handleChange} className="p-2 border rounded" />
        </>
      ) : collectionName === "users" && 'name' in formData ? (
        // User form fields
        <>
          <input type="text" name="name" placeholder="Name" value={formData.name || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="gender" placeholder="Gender" value={formData.gender || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="caste" placeholder="Caste" value={formData.caste || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="height" placeholder="Height" value={formData.height || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="income" placeholder="Income" value={formData.income || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="maritalStatus" placeholder="Marital Status" value={formData.maritalStatus || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation || ''} onChange={handleChange} required className="p-2 border rounded" />
          <input type="text" name="complexion" placeholder="Complexion" value={formData.complexion || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="education" placeholder="Education" value={formData.education || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="fathersName" placeholder="Father's Name" value={formData.fathersName || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="mothersName" placeholder="Mother's Name" value={formData.mothersName || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="placeOfBirth" placeholder="Place of Birth" value={formData.placeOfBirth || ''} onChange={handleChange} className="p-2 border rounded" />
          <input type="text" name="profileImage" placeholder="Profile Image URL" value={formData.profileImage || ''} onChange={handleChange} className="p-2 border rounded" />
        </>
      ) : null}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
    </form>
  </div>
)}
      <div>
        <h2 className="text-2xl mb-4">Matrimonial Contacts</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="border px-4 py-2">{contact.fullName}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.age}</td>
                <td className="border px-4 py-2">{contact.city}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(contact, "matrimonialContacts")} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                  <button onClick={() => handleDelete(contact.id)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Users</h2>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse rounded-lg shadow-lg bg-white">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="border px-6 py-3 text-left">Name</th>
          <th className="border px-6 py-3 text-left">Email</th>
          <th className="border px-6 py-3 text-left">DOB</th>
          <th className="border px-6 py-3 text-left">Gender</th>
          <th className="border px-6 py-3 text-left">Caste</th>
          <th className="border px-6 py-3 text-left">Height</th>
          <th className="border px-6 py-3 text-left">Income</th>
          <th className="border px-6 py-3 text-left">Marital Status</th>
          <th className="border px-6 py-3 text-left">Occupation</th>
          <th className="border px-6 py-3 text-left">Complexion</th>
          <th className="border px-6 py-3 text-left">Education</th>
          <th className="border px-6 py-3 text-left">Father's Name</th>
          <th className="border px-6 py-3 text-left">Mother's Name</th>
          <th className="border px-6 py-3 text-left">Phone</th>
          <th className="border px-6 py-3 text-left">Place of Birth</th>
          <th className="border px-6 py-3 text-left">Profile Image</th>
          <th className="border px-6 py-3 text-left">Portfolio Images</th>
          <th className="border px-6 py-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="bg-gray-50 hover:bg-gray-100 transition duration-150">
            <td className="border px-6 py-4 text-gray-800">{user.name || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.email || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.dob || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.gender || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.caste || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.height || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.income || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.maritalStatus || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.occupation || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.complexion || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.education || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.fathersName || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.mothersName || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.phone || "N/A"}</td>
            <td className="border px-6 py-4 text-gray-800">{user.placeOfBirth || "N/A"}</td>
            <td className="border px-6 py-4">
              {user.profileImage ? (
                <Image src={user.profileImage} alt="Profile" height={10} width={10} className="w-12 h-12 object-cover rounded-full shadow-sm" />
              ) : (
                "N/A"
              )}
            </td>
            <td className="border px-6 py-4">
              {user.portfolioImages && user.portfolioImages.length > 0
                ? user.portfolioImages.map((image, index) => (
                    <Image key={index} src={image} alt={`Portfolio ${index + 1}`} height={10} width={10} className="w-12 h-12 object-cover rounded-full inline-block mr-2 shadow-sm" />
                  ))
                : "N/A"}
            </td>
            <td className="border px-6 py-4 flex space-x-2">
             <button
                onClick={() => handleEdit(user, "users")} // Adjust the second argument as needed
                className="bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                 >

                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</div>
  );
};

export default AdminDashboard;
