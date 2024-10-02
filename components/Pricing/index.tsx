// "use client";
// import Image from "next/image";
// import SectionHeader from "../Common/SectionHeader";

// const Pricing = () => {
//   return (
//     <>
//       {/* <!-- ===== Pricing Table Start ===== --> */}
//       <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           {/* <!-- Section Title Start --> */}
//           <div className="animate_top mx-auto text-center">
//             <SectionHeader
//               headerInfo={{
//                 title: `PRICING PLANS`,
//                 subtitle: `Simple Pricing`,
//                 description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
//               }}
//             />
//           </div>
//           {/* <!-- Section Title End --> */}
//         </div>

//         <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
//           <div className="absolute -bottom-15 -z-1 h-full w-full">
//             <Image
//               fill
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//           </div>
//           <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $10{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Small Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
//                 popular
//               </div>

//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $59{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Medium Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* <!-- Pricing Item --> */}
//             <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
//               <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
//                 $189{" "}
//                 <span className="text-regular text-waterloo dark:text-manatee">
//                   /month
//                 </span>
//               </h3>
//               <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
//                 Large Pack
//               </h4>
//               <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

//               <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
//                 <ul>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     300 GB Storage
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Unlimited Photos and Videos
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Exclusive Support
//                   </li>
//                   <li className="mb-4 text-black last:mb-0 dark:text-manatee">
//                     Custom Branding Strategy
//                   </li>
//                 </ul>
//               </div>

//               <button
//                 aria-label="Get the Plan button"
//                 className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover/btn:pr-2">
//                   Get the Plan
//                 </span>
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 14 14"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Pricing Table End ===== --> */}
//     </>
//   );
// };

// export default Pricing;



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
              <h3 className="mb-7 text-3xl font-bold text-gray-700 dark:text-white">
                Other Matrimonial Sites
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaTimesCircle className="text-red-500" />
                  Limited Search Filters
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaTimesCircle className="text-red-500" />
                  No Dedicated Customer Support
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaTimesCircle className="text-red-500" />
                  Paid Profile Boosting
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
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
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500" />
                  Advanced Search Filters
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500" />
                  24/7 Dedicated Customer Support
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
                  <FaCheckCircle className="text-green-500" />
                  Free Profile Boosting
                </li>
                <li className="flex items-center gap-4 text-lg text-gray-600 dark:text-gray-300">
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
