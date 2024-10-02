// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";

// const Contact = () => {
//   /**
//    * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
//    * Reason: To fix rehydration error
//    */
//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* <!-- ===== Contact Start ===== --> */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0">
//         <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
//           <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
//           <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
//             <Image
//               src="./images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//               fill
//             />
//             <Image
//               src="./images/shape/shape-dotted-dark.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//               fill
//             />
//           </div>

//           <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
//             >
//               <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Send a message
//               </h2>

//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
//                   />
//                 </div>

//                 <div className="mb-11.5 flex">
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
//                   ></textarea>
//                 </div>

//                 <div className="flex flex-wrap gap-4 xl:justify-between ">
//                   <div className="mb-4 flex md:mb-0">
//                     <input
//                       id="default-checkbox"
//                       type="checkbox"
//                       className="peer sr-only"
//                     />
//                     <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
//                       <svg
//                         className="opacity-0 peer-checked:group-[]:opacity-100"
//                         width="10"
//                         height="8"
//                         viewBox="0 0 10 8"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           clipRule="evenodd"
//                           d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
//                           fill="white"
//                         />
//                       </svg>
//                     </span>
//                     <label
//                       htmlFor="default-checkbox"
//                       className="flex max-w-[425px] cursor-pointer select-none pl-5"
//                     >
//                       By clicking Checkbox, you agree to use our “Form” terms
//                       And consent cookie usage in browser.
//                     </label>
//                   </div>

//                   <button
//                     aria-label="send message"
//                     className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
//                   >
//                     Send Message
//                     <svg
//                       className="fill-white"
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
//                         fill=""
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   y: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 2, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
//             >
//               <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
//                 Find us
//               </h2>

//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Our Loaction
//                 </h3>
//                 <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
//               </div>
//               <div className="5 mb-7">
//                 <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Email Address
//                 </h3>
//                 <p>
//                   <a href="#">yourmail@domainname.com</a>
//                 </p>
//               </div>
//               <div>
//                 <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
//                   Phone Number
//                 </h4>
//                 <p>
//                   <a href="#">+009 42334 6343 843</a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Contact End ===== --> */}
//     </>
//   );
// };

// export default Contact;




// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// const Contact = () => {
//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* Contact Section */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0 py-10">
//         <div className="relative mx-auto max-w-6xl bg-white dark:bg-black shadow-lg rounded-lg p-8 lg:p-12">
//           <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800 rounded-lg -z-10"></div>
//           <div className="flex flex-col md:flex-row justify-between gap-8">

//             {/* Form Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="w-full md:w-3/5 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Send a Message
//               </h2>
//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Phone number"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   ></textarea>
//                 </div>
//                 <div className="flex items-center mb-6">
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     className="peer sr-only"
//                   />
//                   <span className="flex items-center justify-center w-5 h-5 mr-3 border-2 border-gray-300 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 dark:border-gray-600">
//                     <svg
//                       className="opacity-0 peer-checked:opacity-100"
//                       width="10"
//                       height="8"
//                       fill="white"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9.707 0.793A1 1 0 0 1 10 1.5c0 .265-.106.519-.293.707l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4.5 5.086l4.793-4.793A1 1 0 0 1 9.707.793z"
//                       />
//                     </svg>
//                   </span>
//                   <label
//                     htmlFor="default-checkbox"
//                     className="text-gray-600 dark:text-gray-400 cursor-pointer"
//                   >
//                     I agree to the terms and conditions.
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none transition duration-300"
//                 >
//                   Send Message
//                   <svg
//                     className="ml-2 w-5 h-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>
//               </form>
//             </motion.div>

//             {/* Info Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.1 }}
//               className="w-full md:w-2/5 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Find Us
//               </h2>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaMapMarkerAlt className="inline-block mr-2 text-blue-600" /> Our Location
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   290 Maryam Springs 260, Courbevoie, Paris, France
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaEnvelope className="inline-block mr-2 text-blue-600" /> Email Address
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="mailto:yourmail@domainname.com" className="hover:text-blue-500">
//                     yourmail@domainname.com
//                   </a>
//                 </p>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaPhoneAlt className="inline-block mr-2 text-blue-600" /> Phone Number
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="tel:+009423346343843" className="hover:text-blue-500">
//                     +009 42334 6343 843
//                   </a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* Contact Section End */}
//     </>
//   );
// };

// export default Contact;


// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// const Contact = () => {
//   const [hasMounted, setHasMounted] = React.useState(false);
//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* Contact Section */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0 py-10">
//         <div className="relative mx-auto max-w-6xl bg-white dark:bg-black shadow-lg rounded-lg p-8 lg:p-12">
//           <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800 rounded-lg -z-10"></div>
//           <div className="flex flex-col md:flex-row justify-between gap-8">

//             {/* Form Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="w-full md:w-3/5 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Send Us Your Details
//               </h2>
//               <form
//                 action="https://formbold.com/s/unique_form_id"
//                 method="POST"
//               >
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     placeholder="Age"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     placeholder="City"
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <select
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   >
//                     <option value="">Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="mb-6">
//                   <textarea
//                     placeholder="Your Message (e.g., preferences, details)"
//                     rows={4}
//                     className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   ></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <select
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   >
//                     <option value="">Marital Status</option>
//                     <option value="single">Single</option>
//                     <option value="divorced">Divorced</option>
//                     <option value="widowed">Widowed</option>
//                   </select>
//                 </div>
//                 <div className="flex items-center mb-6">
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     className="peer sr-only"
//                   />
//                   <span className="flex items-center justify-center w-5 h-5 mr-3 border-2 border-gray-300 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 dark:border-gray-600">
//                     <svg
//                       className="opacity-0 peer-checked:opacity-100"
//                       width="10"
//                       height="8"
//                       fill="white"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M9.707 0.793A1 1 0 0 1 10 1.5c0 .265-.106.519-.293.707l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4.5 5.086l4.793-4.793A1 1 0 0 1 9.707.793z"
//                       />
//                     </svg>
//                   </span>
//                   <label
//                     htmlFor="default-checkbox"
//                     className="text-gray-600 dark:text-gray-400 cursor-pointer"
//                   >
//                     I agree to the terms and conditions.
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none transition duration-300"
//                 >
//                   Submit Details
//                   <svg
//                     className="ml-2 w-5 h-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M13 7l5 5m0 0l-5 5m5-5H6"
//                     />
//                   </svg>
//                 </button>
//               </form>
//             </motion.div>

//             {/* Info Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.1 }}
//               className="w-full md:w-2/5 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Contact Us
//               </h2>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaMapMarkerAlt className="inline-block mr-2 text-blue-600" /> Our Location
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   290 Maryam Springs 260, Courbevoie, Paris, France
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaEnvelope className="inline-block mr-2 text-blue-600" /> Email Address
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="mailto:yourmail@domainname.com" className="hover:text-blue-500">
//                     yourmail@domainname.com
//                   </a>
//                 </p>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaPhoneAlt className="inline-block mr-2 text-blue-600" /> Phone Number
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="tel:+009423346343843" className="hover:text-blue-500">
//                     +009 42334 6343 843
//                   </a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* Contact Section End */}
//     </>
//   );
// };

// export default Contact;

// "use client";
// import { motion } from "framer-motion";
// import { useState, useEffect, ChangeEvent, FormEvent } from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { db } from "../../firebaseConfig"; // Import Firebase config
// import { collection, addDoc } from "firebase/firestore"; // Firestore methods

// interface FormData {
//   fullName: string;
//   email: string;
//   age: string;
//   phoneNumber: string;
//   city: string;
//   gender: string;
//   message: string;
//   maritalStatus: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: "",
//     email: "",
//     age: "",
//     phoneNumber: "",
//     city: "",
//     gender: "",
//     message: "",
//     maritalStatus: "",
//   });

//   const [hasMounted, setHasMounted] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   // Handle input change
//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Add document to Firestore
//       await addDoc(collection(db, "matrimonialContacts"), {
//         ...formData,
//         timestamp: new Date(),
//       });

//       setSuccess(true);
//       setLoading(false);

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         age: "",
//         phoneNumber: "",
//         city: "",
//         gender: "",
//         message: "",
//         maritalStatus: "",
//       });
//     } catch (error) {
//       console.error("Error storing data:", error);
//       setError("Failed to send your details. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Contact Section */}
//       <section id="support" className="px-4 md:px-8 2xl:px-0 py-10">
//         <div className="relative mx-auto max-w-6xl bg-white dark:bg-black shadow-lg rounded-lg p-8 lg:p-12">
//           <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800 rounded-lg -z-10"></div>
//           <div className="flex flex-col md:flex-row justify-between gap-8">
//             {/* Form Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="w-full md:w-3/5 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Send Us Your Details
//               </h2>

//               {error && <p className="text-red-500">{error}</p>}
//               {success && (
//                 <p className="text-green-500">Details submitted successfully!</p>
//               )}

//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Full Name"
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email Address"
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     placeholder="Age"
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="City"
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   />
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   >
//                     <option value="">Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="mb-6">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Your Message (e.g., preferences, details)"
//                     rows={4}
//                     required
//                     className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   ></textarea>
//                 </div>
//                 <div className="mb-6">
//                   <select
//                     name="maritalStatus"
//                     value={formData.maritalStatus}
//                     onChange={handleChange}
//                     required
//                     className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
//                   >
//                     <option value="">Marital Status</option>
//                     <option value="single">Single</option>
//                     <option value="divorced">Divorced</option>
//                     <option value="widowed">Widowed</option>
//                   </select>
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none transition duration-300 ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {loading ? "Submitting..." : "Submit Details"}
//                 </button>
//               </form>
//             </motion.div>

//             {/* Info Section */}
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.5, delay: 0.1 }}
//               className="w-full md:w-2/5 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md"
//             >
//               <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
//                 Find Us
//               </h2>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaMapMarkerAlt className="inline-block mr-2 text-blue-600" /> Our Location
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   290 Maryam Springs 260, Courbevoie, Paris, France
//                 </p>
//               </div>

//               <div className="mb-6">
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaEnvelope className="inline-block mr-2 text-blue-600" /> Email Address
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="mailto:yourmail@domainname.com" className="hover:text-blue-500">
//                     yourmail@domainname.com
//                   </a>
//                 </p>
//               </div>

//               <div>
//                 <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
//                   <FaPhoneAlt className="inline-block mr-2 text-blue-600" /> Phone Number
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   <a href="tel:+009423346343843" className="hover:text-blue-500">
//                     +009 42334 6343 843
//                   </a>
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* Contact Section End */}
//     </>
//   );
// };

// export default Contact;



"use client";
import { motion } from "framer-motion";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { db } from "../../firebaseConfig"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

interface FormData {
  fullName: string;
  email: string;
  age: string;
  phoneNumber: string;
  city: string;
  gender: string;
  message: string;
  maritalStatus: string;
}

// Modal Component
const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p>Your details have been submitted successfully.</p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    age: "",
    phoneNumber: "",
    city: "",
    gender: "",
    message: "",
    maritalStatus: "",
  });

  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Add document to Firestore
      await addDoc(collection(db, "matrimonialContacts"), {
        ...formData,
        timestamp: new Date(),
      });

      setSuccess(true);
      setLoading(false);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        age: "",
        phoneNumber: "",
        city: "",
        gender: "",
        message: "",
        maritalStatus: "",
      });
    } catch (error) {
      console.error("Error storing data:", error);
      setError("Failed to send your details. Please try again.");
      setLoading(false);
    }
  };

  // Close Modal
  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <>
      {success && <Modal onClose={closeModal} />} {/* Show modal on success */}

      {/* Contact Section */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 py-10">
        <div className="relative mx-auto max-w-6xl bg-white dark:bg-black shadow-lg rounded-lg p-8 lg:p-12">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-t from-transparent to-blue-100 dark:to-gray-800 rounded-lg -z-10"></div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="w-full md:w-3/5 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
                Send Us Your Details
              </h2>

              {error && <p className="text-red-500">{error}</p>}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-6">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (e.g., preferences, details)"
                    rows={4}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    required
                    className="border-b border-gray-300 bg-transparent py-3 focus:border-blue-500 outline-none transition-all dark:border-gray-700 dark:focus:border-blue-300"
                  >
                    <option value="">Marital Status</option>
                    <option value="single">Single</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Details"}
                </button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.1 }}
              className="w-full md:w-2/5 p-6 bg-blue-50 dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">
                Find Us
              </h2>

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <FaMapMarkerAlt className="inline-block mr-2 text-blue-600" /> Our Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  290 Maryam Springs 260, Courbevoie, Paris, France
                </p>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <FaEnvelope className="inline-block mr-2 text-blue-600" /> Email Address
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="mailto:yourmail@domainname.com" className="hover:text-blue-500">
                    yourmail@domainname.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  <FaPhoneAlt className="inline-block mr-2 text-blue-600" /> Phone Number
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="tel:+009423346343843" className="hover:text-blue-500">
                    +009 42334 6343 843
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
    </>
  );
};

export default Contact;
