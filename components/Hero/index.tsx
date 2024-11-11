"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext"; // Adjust the import path as needed

const Hero = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <section className="relative w-full">
      {/* For small devices: Image displayed above the text */}
      <div className="block lg:hidden">
        <Image
          src="/images/hero11.jpeg" // Replace with your image path
          alt="Hero Image"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Text content for small devices below the image */}
      <div className="block lg:hidden text-center px-4 py-8 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Find Your{" "}
          <span className="text-yellow-500">Perfect Match</span> Today
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Join millions of users who trust us for finding meaningful relationships
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          {isAuthenticated ? (
            <>
              <Link href="/profile">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                  My Profile
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/register">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                  Register
                </button>
              </Link>
              <Link href="/login">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* For larger devices: Background image with text centered */}
      <div
        className="relative hidden lg:flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero11.jpeg')" }} // Replace with your image path
      >
        {/* Overlay to darken the background for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content for larger screens */}
        <div className="relative z-10 text-center px-4 py-16 mx-auto max-w-7xl mt-40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your{" "}
            <span className="text-yellow-400">Perfect Match</span> Today
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Join millions of users who trust us for finding meaningful relationships
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
            {isAuthenticated ? (
              <>
                <Link href="/profile">
                  <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                    My Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/register">
                  <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
                    Register
                  </button>
                </Link>
                <Link href="/login">
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
