"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State to hold the success message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation (optional)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Here, you can add functionality to send the email to a backend server or service.
    // For demonstration, we'll just log it to the console.
    console.log("Email submitted:", email);
    
    // Clear the email input and set a success message
    setEmail("");
    setMessage("Thank you for signing up! We'll keep you updated.");
  };

  return (
    <section className="py-10 px-4 md:py-8 bg-white text-gray-800 z-0 sm:p-4">
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl pt-16 md:pt-20">
        {/* Left Section - Text & Form */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-6">
            <h4 className="text-lg font-medium tracking-widest text-gray-500">
              🔥 The Perfect Matrimonial Platform
            </h4>
            <h1 className="text-4xl font-extrabold leading-snug md:text-5xl xl:text-6xl">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
                Life Partner
              </span>{" "}
              with Ease
            </h1>
            <p className="leading-relaxed text-gray-500">
              Discover meaningful connections with a platform that values trust,
              privacy, and genuine relationships. Join us today for a journey
              towards love.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg px-4 py-3 border-2 border-gray-300 focus:border-gray-900 transition duration-300"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 p-2"
              >
                Get Started
              </button>
            </form>
            {/* Message Display */}
            {message && <p className="mt-2 text-green-500">{message}</p>}
          </div>

          {/* Right Section - Images */}
          <div className="col-span-12 lg:col-span-7 p-4">
            {/* New Theme for Small Devices */}
            <div className="block lg:hidden">
              {/* Grid for Small Devices */}
              <div className="grid grid-cols-1 gap-4">
                {/* Image 1 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero07.jpg"
                    alt="Main Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 2 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 5 */}
                <div className="relative w-full h-64 transform hover:rotate-6 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero08.jpg"
                    alt="Central Rotating Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Previous Theme for Large Devices */}
            <div className="hidden lg:block">
              {/* Grid for Large Devices */}
              <div className="grid grid-cols-12 grid-rows-6 gap-4 relative">
                {/* Image 1 */}
                <div className="relative row-span-12 col-span-6 transform hover:scale-110 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero07.jpg"
                    alt="Main Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 2 */}
                <div className="relative row-span-12 col-span-3 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 3 */}
                <div className="relative row-span-12 col-span-2 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero04.jpg"
                    alt="Wide Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 4 */}
                <div className="relative row-span-12 col-span-6 transform hover:scale-110 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero02.jpg"
                    alt="Large Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 5 */}
                <div className="relative row-span-12 col-span-6 transform hover:rotate-6 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero08.jpg"
                    alt="Central Rotating Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
