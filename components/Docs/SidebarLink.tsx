// "use client";
// import Link from "next/link";

// const SidebarLink = () => {
//   return (
//     <>
//       <li className="block">
//         <Link
//           href={`/docs`}
//           className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
//         >
//           Introduction
//         </Link>
//         <Link
//           href={`/docs`}
//           className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
//         >
//           Bootstrap Template Guide
//         </Link>
//         <Link
//           href={`/docs`}
//           className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
//         >
//           Style Guide
//         </Link>
//         <Link
//           href={`/docs`}
//           className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
//         >
//           Using Tailwind Components
//         </Link>
//       </li>
//     </>
//   );
// };

// export default SidebarLink;


import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Matrimonial Blog - Tips for Finding Your Life Partner",
  description: "Detailed blog post with tips and advice on finding the perfect partner through our matrimonial platform.",
};

const SingleBarLink = async () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-black py-20 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="animate-fade-in-up transition-opacity duration-700">
          {/* Blog Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog/blog-01.png"
              alt="Top Tips for Finding Your Perfect Life Partner"
              fill
              className="object-cover"
            />
          </div>

          {/* Blog Title */}
          <h1 className="mt-10 text-4xl font-bold text-gray-900 dark:text-white text-center tracking-wide">
            Top Tips for Finding Your Perfect Life Partner
          </h1>

          {/* Author and Date */}
          <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Author: Priya Kapoor</span>
            <span>Published On: August 20, 2023</span>
            <span>Category: Relationship Tips</span>
          </div>

          {/* Blog Content */}
          <div className="mt-12 text-lg leading-8 text-gray-700 dark:text-gray-300 max-w-prose mx-auto space-y-6">
            <p>
              Finding your perfect life partner is one of the most important decisions you'll ever make. 
              Our matrimonial platform is designed to help you navigate this journey with confidence and ease.
            </p>
            <p>
              Whether you're looking for someone who shares your values or seeking guidance on how to connect with potential matches, 
              these tips will help you make informed decisions. Remember, the key to a successful relationship is communication, trust, 
              and shared goals.
            </p>

            {/* Inline Images */}
            <div className="flex justify-center gap-4 my-10">
              <Image
                src="/images/blog/marriage-01.png"
                width={300}
                height={180}
                alt="Marriage"
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="/images/blog/marriage-02.png"
                width={300}
                height={180}
                alt="Couple"
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Steps to Find Your Ideal Match
            </h2>

            <p>
              Building a strong relationship starts with understanding your own needs and desires. It also involves being open to 
              meeting people who might bring new perspectives into your life. Take time to reflect on what truly matters to you.
            </p>

            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Explore different profiles thoughtfully</li>
              <li>Engage in meaningful conversations</li>
              <li>Set clear expectations and communicate them</li>
              <li>Trust the process and remain patient</li>
            </ul>
          </div>

          {/* Share Post */}
          <div className="mt-16">
            <SharePost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBarLink;
