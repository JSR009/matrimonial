"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-4 text-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the premium services we offer to make your matchmaking journey smooth and special.
          </motion.p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/vp.png"
              alt="Verified Profiles"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-700">
              Our platform ensures all profiles are thoroughly verified for authenticity and reliability.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/as.png"
              alt="Advanced Search Filters"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              Advanced Search Filters
            </h3>
            <p className="text-gray-700">
              Use our advanced filters to find the right match based on your preferences.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/ps.png"
              alt="Personalized Support"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              Personalized Support
            </h3>
            <p className="text-gray-700">
              We provide one-on-one assistance to help you navigate the matchmaking process.
            </p>
          </motion.div>

          {/* Numerology Section */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/images/numerology.jpg"
              alt="Numerology Matchmaking"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h3 className="text-3xl font-bold text-purple-600 mb-2">
              Numerology Matchmaking
            </h3>
            <p className="text-gray-700">
              Discover compatibility through the power of numbers! Our numerology service analyzes birth dates and names to help you find a partner whose life path aligns with yours, creating meaningful and harmonious connections.
            </p>
          </motion.div>
        </div>

        {/* Sleek Offer Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-8 rounded-lg shadow-2xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-400 rounded-full opacity-30"></div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10">
            Special Offer!
          </h2>
          <p className="text-2xl md:text-3xl font-medium mb-8 relative z-10">
            Enroll today for our **Matrimonial Service** and get **FREE Numerology Matchmaking** included!
          </p>
          <p className="text-xl md:text-2xl font-light mb-12 relative z-10">
            Let the power of numbers guide you to your perfect match. Don’t miss out on this limited-time offer!
          </p>

          <motion.button
            className="relative z-10 bg-white text-purple-600 font-semibold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              Claim Your Offer Now
            </Link>
          </motion.button>

          <div className="absolute top-10 right-10 text-xs font-light text-gray-300">*Limited time only</div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
