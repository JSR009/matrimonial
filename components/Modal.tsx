import { useState } from "react";

// Define a custom interface for the form data
interface CustomFormData {
  fullName: string;
  email: string;
  dob: string; // Changed from age to dob
  phoneNumber: string;
  city: string;
  gender: string;
  message: string;
  maritalStatus: string;
}

interface ModalProps {
  data: CustomFormData | null;
  onClose: () => void;
  onSave: (data: CustomFormData) => void;
}

const Modal: React.FC<ModalProps> = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState<CustomFormData>(
    data || {
      fullName: "",
      email: "",
      dob: "", // Initialized dob field
      phoneNumber: "",
      city: "",
      gender: "",
      message: "",
      maritalStatus: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[85vh] overflow-y-auto mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">{data ? "Edit Entry" : "New Entry"}</h2>

        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          name="dob"
          type="date" // Changed input type to date for dob
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500 h-24 resize-none"
        />
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className="border border-gray-300 p-3 mb-3 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-150"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
