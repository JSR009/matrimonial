// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import FAQItem from "./FAQItem";
// import faqData from "./faqData";

// const FAQ = () => {
//   const [activeFaq, setActiveFaq] = useState(1);

//   const handleFaqToggle = (id: number) => {
//     activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
//   };

//   return (
//     <>
//       {/* <!-- ===== FAQ Start ===== --> */}
//       <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
//         <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
//           <div className="absolute -bottom-16 -z-1 h-full w-full">
//             <Image
//               fill
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//             <Image
//               fill
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//             />
//           </div>
//           <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5 ml-5">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left md:w-2/5 lg:w-1/2"
//             >
//               <span className="font-medium uppercase text-black dark:text-white ">
//                 OUR FAQS
//               </span>
//               <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
//                 Frequently Asked
//                 <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
//                   Questions
//                 </span>
//               </h2>

//               <a
//                 href="#"
//                 className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover:pr-2">Know More</span>
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
//               </a>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },

//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right md:w-3/5 lg:w-1/2"
//             >
//               <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
//                 {faqData.map((faq, key) => (
//                   <FAQItem
//                     key={key}
//                     faqData={{ ...faq, activeFaq, handleFaqToggle }}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== FAQ End ===== --> */}
//     </>
//   );
// };

// export default FAQ;



// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import FAQItem from "./FAQItem";
// import faqData from "./faqData";

// const FAQ = () => {
//   const [activeFaq, setActiveFaq] = useState<number | null>(null);

//   const handleFaqToggle = (id: number) => {
//     setActiveFaq(activeFaq === id ? null : id);
//   };

//   return (
//     <>
//       {/* <!-- ===== FAQ Start ===== --> */}
//       <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
//         <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
//           <div className="absolute -bottom-16 -z-1 h-full w-full">
//             <Image
//               fill
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="dark:hidden"
//             />
//             <Image
//               fill
//               src="/images/shape/shape-dotted-light.svg"
//               alt="Dotted"
//               className="hidden dark:block"
//             />
//           </div>
//           <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5 ml-5">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left md:w-2/5 lg:w-1/2"
//             >
//               <span className="font-medium uppercase text-black dark:text-white ">
//                 OUR FAQS
//               </span>
//               <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
//                 Frequently Asked
//                 <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
//                   Questions
//                 </span>
//               </h2>

//               <a
//                 href="#"
//                 className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
//               >
//                 <span className="duration-300 group-hover:pr-2">Know More</span>
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
//               </a>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right md:w-3/5 lg:w-1/2"
//             >
//               <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
//                 {faqData.map((faq) => (
//                   <FAQItem
//                     key={faq.id}
//                     faq={faq} // Pass the entire FAQ object
//                     active={activeFaq === faq.id} // Determine if this FAQ is active
//                     onToggle={handleFaqToggle} // Pass the toggle function
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== FAQ End ===== --> */}
//     </>
//   );
// };

// export default FAQ;

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";


const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      quest: "Is my personal information safe?",
      ans: "Absolutely! We prioritize your privacy and use advanced security measures to protect your personal information. Your data is only shared with verified users based on your preferences.",
    },
    {
      id: 2,
      quest: "Are there any fees involved?",
      ans: "We offer both free and premium membership options. Basic features are available for free, while premium memberships provide additional benefits such as enhanced visibility and advanced search filters.",
    },
    {
      id: 3,
      quest: "How does the matchmaking process work?",
      ans: "Our advanced algorithms analyze your profile, preferences, and interests to suggest potential matches. You can also search for matches based on specific criteria.",
    },
  ];
  return(
    <>
    <div className="flex justify-center items-center">
      <div className="w-[89%] m-auto max-w-[1400px] bg-white-300 rounded-md p-8 shadow-lg">
        <h2 className="text-2xl mb-6 font-semibold">
          Frequently Asked Question
        </h2>
        {
          questions.map((q) => (
            <div key={q.id} className="mb-4 last:mb-0">
              <button className="w-full text-left text-xl focus:outline-none rounded-sm shadow-md flex justify-between items-center p-4"
              onClick={() => setActiveQuestion(activeQuestion === q.id ? null: q.id)}>
                {q.quest}
                {activeQuestion === q.id ? (
                  <FaMinusCircle />
                ): <FaPlusCircle />}
                
              </button>
              <AnimatePresence>
                {activeQuestion === q.id && (
                  <motion.div 
                  initial={{opacity:0, height:0}}
                  animate={{opacity:1, height: "auto"}}
                  exit={{opacity:0, height:0}}
                  className="mt-2 text-gray-600 ml-6"
                  >
                    <p>{q.ans}</p>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))
        }

      </div>
    </div>
    </>
  )
}

export default FAQ;
