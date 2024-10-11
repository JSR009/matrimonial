"use client";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Importing icons
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* ===== Pricing Comparison Section Start ===== */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center mb-10">
            <SectionHeader
              headerInfo={{
                title: `COMPARE OUR PLANS`,
                subtitle: `What We Provide vs Others`,
                description: `Compare the features of our matrimonial services versus other platforms. We offer you much more!`,
              }}
            />
          </div>
          {/* Section Title End */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap xl:gap-14">
            {/* Pricing Comparison Item - Other Websites */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-10 shadow-lg dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12">
              <h3 className="mb-7 text-3xl font-bold text-black-700 dark:text-white">
                Other Matrimonial Sites
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                  <FaTimesCircle className="text-red-500" />
                  Limited Search Filters
                </li>
                <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                  <FaTimesCircle className="text-red-500" />
                  No Dedicated Customer Support
                </li>
                <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                  <FaTimesCircle className="text-red-500" />
                  Paid Profile Boosting
                </li>
                <li className="flex items-center gap-4 text-lg text-black-600 dark:text-black-300">
                  <FaTimesCircle className="text-red-500" />
                  No Matchmaking Consultation
                </li>
              </ul>

              <button
                aria-label="Explore Other Websites"
                className="mt-10 w-full rounded-lg border border-red-500 bg-transparent py-3 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white"
              >
                Learn More
              </button>
            </div>

            {/* Pricing Comparison Item - Our Website */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-10 shadow-lg dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/2 xl:p-12">
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
        </div>
      </section>
      {/* ===== Pricing Comparison Section End ===== */}
    </>
  );
};

export default Pricing;
