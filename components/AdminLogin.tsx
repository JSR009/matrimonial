"use client";

import { useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Use Next.js router for redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loader

    // Simulate a network request (optional delay for testing)
    await new Promise(resolve => setTimeout(resolve, 500));

    // Example email and password validation
    if (email === "milanmunch20@gmail.com" && password === "$admin@20$") {
      Cookies.set('adminToken', 'true', { expires: 1 }); // Expires in 1 day
      router.push('/dashboard'); // Redirect to the dashboard
    } else {
      setError("Invalid email or password.");
    }

    setIsLoading(false); // Stop loader
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
