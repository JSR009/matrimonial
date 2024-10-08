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
            className="text-4xl md:text-5xl font-bold text-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the features and services we offer to make your journey
            toward finding love easier.
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
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-700">
              Our platform ensures that all profiles are thoroughly verified for
              authenticity and reliability.
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
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Advanced Search Filters
            </h3>
            <p className="text-gray-700">
              Use our advanced filters to find the right match based on your
              preferences.
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
            <h3 className="text-2xl font-bold text-purple-600 mb-2">
              Personalized Support
            </h3>
            <p className="text-gray-700">
              We provide one-on-one assistance to help you navigate the
              matchmaking process.
            </p>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Exclusive Premium Features
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Unlock advanced features with our premium membership, including
            personalized matchmaking and exclusive events.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition">
            <Link href="/contact">
            Explore Premium Plans
            </Link>
           
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
