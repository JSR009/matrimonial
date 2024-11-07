"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for routing
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter(); // Initialize Next.js router

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Clear previous error

    // Check if the entered email and password match the hardcoded values
    if (email === 'milanmunch01@gmail.com' && password === 'Tech@1234') {
      // Successful login, route to dashboard
      router.push('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/3 mx-auto mt-16 p-5 border border-gray-300 rounded-lg shadow-lg bg-white mb-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Admin Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <div className="absolute top-9 right-3 cursor-pointer" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
        </div>
      </div>
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-lg text-white ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default AdminLoginForm;
