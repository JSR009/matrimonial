"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, "matrimonialContacts"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(data);
      setLoading(false);
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
