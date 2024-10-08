"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="py-20 lg:py-32 bg-white text-gray-800">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
              About Us
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              We are committed to helping you find your life partner. With years
              of experience in matchmaking, we bring love, trust, and
              companionship to thousands of couples worldwide.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/hero01.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-400 text-white p-10 rounded-lg shadow-lg mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to create meaningful connections that last a lifetime.
            We leverage our expertise, technology, and personalized services to
            ensure that you meet people who align with your values and goals.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-6 rounded-lg shadow-md bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Trust</h3>
            <p>
              Every profile on our platform is verified, ensuring you can trust
              the people you meet.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-lg shadow-md bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Privacy</h3>
            <p>
              We respect your privacy and ensure that your data remains secure
              and confidential.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-lg shadow-md bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Support</h3>
            <p>
              Our dedicated customer support is always available to assist you
              in finding your perfect match.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
