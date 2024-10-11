"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  return (
    <>
      {/* <!-- ===== Hero Section Start ===== --> */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-purple-600 to-blue-400 text-white m-5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              fill
              className="object-cover opacity-30"
              src="/images/hero-background.jpg"
              alt="Matrimonial Services Background"
            />
          </div>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Find Your Perfect Match
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join thousands of happy couples who found their soulmate with us!
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Hero Section End ===== --> */}
    </>
  );
};

export default FeaturesTab;
