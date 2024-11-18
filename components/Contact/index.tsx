"use client";
import { motion } from "framer-motion";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { db } from "../../firebaseConfig"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

interface FormData {
  fullName: string;
  email: string;
  dob: string;
  phoneNumber: string;
  city: string;
  gender: string;
  message: string;
  maritalStatus: string;
}

// Modal Component
const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p>Your details have been submitted successfully.</p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    city: "",
    gender: "",
    message: "",
    maritalStatus: "",
  });

  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Add document to Firestore
      await addDoc(collection(db, "matrimonialContacts"), {
        ...formData,
        timestamp: new Date(),
      });

      setSuccess(true);
      setLoading(false);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        dob: "",
        phoneNumber: "",
        city: "",
        gender: "",
        message: "",
        maritalStatus: "",
      });
    } catch (error) {
      console.error("Error storing data:", error);
      setError("Failed to send your details. Please try again.");
      setLoading(false);
    }
  };

  // Close Modal
  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <>
      {success && <Modal onClose={closeModal} />} {/* Show modal on success */}

      {/* Contact Section */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 py-10">
        <div className="relative mx-auto max-w-6xl bg-white dark:bg-black shadow-lg rounded-lg p-8 lg:p-12">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800 rounded-lg -z-10"></div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-full md:w-3/5 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
                Send Us Your Details
              </h2>

              {error && <p className="text-red-500">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                </div>
                <div className="mb-6">
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  >
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Details"}
                </button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.1 }}
              className="w-full md:w-2/5 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
                Find Us
              </h2>

              <div className="flex flex-col space-y-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-2xl text-blue-500" />
                  <span>Office no. 217 2nd floor, jain tower 1, District Center, Janakpuri, New Delhi 110058

Timing: Monday to Saturday: 10 AM - 6 PM (Closed on govt. holiday)</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-2xl text-blue-500" />
                  <span>milanmunch20@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-4 text-2xl text-blue-500" />
                  <span>+1 (123) 456-7890</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
