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
