"use client";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* ===== Pricing Section Start ===== */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center mb-10">
            <SectionHeader
              headerInfo={{
                title: `OUR MATRIMONIAL PLAN`,
                subtitle: `Why Choose Us?`,
                description: `Discover the premium features of our matrimonial services designed to help you find your perfect match.`,
              }}
            />
          </div>
          {/* Section Title End */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[600px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="animate_top relative rounded-lg border border-stroke bg-white p-10 shadow-lg dark:border-strokedark dark:bg-blacksection dark:shadow-none">
            <h3 className="mb-7 text-3xl font-bold text-gray-700 dark:text-white">
              Our Matrimonial Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                <FaCheckCircle className="text-green-500" />
                Advanced Search Filters
              </li>
              <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                <FaCheckCircle className="text-green-500" />
                24/7 Dedicated Customer Support
              </li>
              <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                <FaCheckCircle className="text-green-500" />
                Free Profile Boosting
              </li>
              <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                <FaCheckCircle className="text-green-500" />
                Personalized Matchmaking Consultation
              </li>
            </ul>

            <button
              aria-label="Explore Our Plan"
              className="mt-10 w-full rounded-lg bg-green-500 py-3 text-white transition duration-300 hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500"
            >
              Choose Our Service
            </button>
          </div>
        </div>
      </section>
      {/* ===== Pricing Section End ===== */}
    </>
  );
};

export default Pricing;
