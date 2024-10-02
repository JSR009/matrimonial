// import RelatedPost from "@/components/Blog/RelatedPost";
// import SharePost from "@/components/Blog/SharePost";
// import { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Blog Details Page - Solid SaaS Boilerplate",
//   description: "This is Blog details page for Solid Pro",
//   // other metadata
// };

// const SingleBlogPage = async () => {
//   return (
//     <>
//       <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
//             <div className="md:w-1/2 lg:w-[32%]">
//               <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
//                 <form
//                   action="https://formbold.com/s/unique_form_id"
//                   method="POST"
//                 >
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Search Here..."
//                       className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
//                     />

//                     <button
//                       className="absolute right-0 top-0 p-5"
//                       aria-label="search-icon"
//                     >
//                       <svg
//                         className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
//                         width="21"
//                         height="21"
//                         viewBox="0 0 21 21"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
//                 <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
//                   Categories
//                 </h4>

//                 <ul>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Blog</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Events</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Grids</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">News</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Rounded</a>
//                   </li>
//                 </ul>
//               </div>

//               <RelatedPost />
//             </div>

//             <div className="lg:w-2/3">
//               <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
//                 <div className="mb-10 w-full overflow-hidden ">
//                   <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                     <Image
//                       src={"/images/blog/blog-01.png"}
//                       alt="Kobe Steel plant that supplied"
//                       fill
//                       className="rounded-md object-cover object-center"
//                     />
//                   </div>
//                 </div>

//                 <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                   Kobe Steel plant that supplied
//                 </h2>

//                 <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
//                   <li>
//                     <span className="text-black dark:text-white">Author: </span>{" "}
//                     Jhon Doe
//                   </li>
//                   <li>
//                     <span className="text-black dark:text-white">
//                       Published On: July 30, 2023
//                     </span>{" "}
//                   </li>
//                   <li>
//                     <span className="text-black dark:text-white">
//                       Category:
//                     </span>
//                     Events
//                   </li>
//                 </ul>

//                 <div className="blog-details">
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
//                     leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
//                     vel turpis in dolor volutpat imperdiet in ut mi. Integer non
//                     volutpat nulla. Nunc elementum elit viverra, tempus quam
//                     non, interdum ipsum.
//                   </p>

//                   <p>
//                     Aenean augue ex, condimentum vel metus vitae, aliquam porta
//                     elit. Quisque non metus ac orci mollis posuere. Mauris vel
//                     ipsum a diam interdum ultricies sed vitae neque. Nulla
//                     porttitor quam vitae pulvinar placerat. Nulla fringilla elit
//                     sit amet justo feugiat sodales. Morbi eleifend, enim non
//                     eleifend laoreet, odio libero lobortis lectus, non porttitor
//                     sem urna sit amet metus. In sollicitudin quam est,
//                     pellentesque consectetur felis fermentum vitae.
//                   </p>

//                   <div className="flex flex-wrap gap-5">
//                     <Image
//                       src={"/images/blog/blog-01.png"}
//                       width={350}
//                       height={200}
//                       alt="image"
//                     />
//                     <Image
//                       src={"/images/blog/blog-02.png"}
//                       width={350}
//                       height={200}
//                       alt="image"
//                     />
//                   </div>

//                   <h3 className="pt-8">
//                     Nunc elementum elit viverra, tempus quam non
//                   </h3>

//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
//                     leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
//                     vel turpis in dolor volutpat imperdiet in ut mi. Integer non
//                     volutpat nulla. Nunc elementum elit viverra, tempus quam
//                     non, interdum ipsum.
//                   </p>
//                 </div>

//                 <SharePost />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SingleBlogPage;



// import RelatedPost from "@/components/Blog/RelatedPost";
// import SharePost from "@/components/Blog/SharePost";
// import { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Matrimonial Blog - Tips for Finding Your Life Partner",
//   description: "Detailed blog post with tips and advice on finding the perfect partner through our matrimonial platform.",
// };

// const SingleBlogPage = async () => {
//   return (
//     <>
//       <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
//             {/* Sidebar */}
//             <div className="md:w-1/2 lg:w-[32%]">
//               {/* Search Form */}
//               <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-lg transition-transform duration-300 hover:shadow-xl dark:border-strokedark dark:bg-blacksection">
//                 <form action="https://formbold.com/s/unique_form_id" method="POST">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Search matrimonial tips..."
//                       className="w-full rounded-lg border border-stroke px-6 py-4 shadow-sm transition-all duration-200 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
//                     />
//                     <button className="absolute right-0 top-0 p-5" aria-label="search-icon">
//                       <svg
//                         className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
//                         width="21"
//                         height="21"
//                         viewBox="0 0 21 21"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               {/* Categories Section */}
//               <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-lg transition-transform duration-300 hover:shadow-xl dark:border-strokedark dark:bg-blacksection">
//                 <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">Categories</h4>
//                 <ul className="text-gray-600 dark:text-gray-300">
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Relationship Tips</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Wedding Planning</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Success Stories</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Family Advice</a>
//                   </li>
//                   <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
//                     <a href="#">Cultural Insights</a>
//                   </li>
//                 </ul>
//               </div>

//               <RelatedPost />
//             </div>

//             {/* Main Blog Section */}
//             <div className="lg:w-2/3">
//               <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-strokedark dark:bg-blacksection md:p-10">
//                 <div className="mb-10 w-full overflow-hidden">
//                   <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                     <Image
//                       src={"/images/blog/blog-01.png"}
//                       alt="Top Tips for Finding Your Perfect Life Partner"
//                       fill
//                       className="rounded-md object-cover object-center"
//                     />
//                   </div>
//                 </div>

//                 <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                   Top Tips for Finding Your Perfect Life Partner
//                 </h2>

//                 <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5 text-gray-500 dark:text-gray-400">
//                   <li>Author: Priya Kapoor</li>
//                   <li>Published On: August 20, 2023</li>
//                   <li>Category: Relationship Tips</li>
//                 </ul>

//                 {/* Blog Content */}
//                 <div className="blog-details text-gray-700 dark:text-gray-300 leading-relaxed">
//                   <p>
//                     Finding your perfect life partner is one of the most important decisions you'll ever make. 
//                     Our matrimonial platform is designed to help you navigate this journey with confidence and ease.
//                   </p>
//                   <p>
//                     Whether you're looking for someone who shares your values or seeking guidance on how to connect with potential matches, 
//                     these tips will help you make informed decisions. Remember, the key to a successful relationship is communication, trust, 
//                     and shared goals.
//                   </p>

//                   {/* Image Gallery */}
//                   <div className="flex flex-wrap gap-5 my-8">
//                     <Image src={"/images/blog/marriage-01.png"} width={350} height={200} alt="Marriage" />
//                     <Image src={"/images/blog/marriage-02.png"} width={350} height={200} alt="Couple" />
//                   </div>

//                   <h3 className="text-xl font-semibold mt-6 mb-4">Steps to Find Your Ideal Match</h3>
//                   <p>
//                     Building a strong relationship starts with understanding your own needs and desires. It also involves being open to 
//                     meeting people who might bring new perspectives into your life. Take time to reflect on what truly matters to you.
//                   </p>

//                   <ul className="list-disc ml-5 mt-4 space-y-2">
//                     <li>Explore different profiles thoughtfully</li>
//                     <li>Engage in meaningful conversations</li>
//                     <li>Set clear expectations and communicate them</li>
//                     <li>Trust the process and remain patient</li>
//                   </ul>
//                 </div>

//                 <SharePost />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SingleBlogPage;







import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Matrimonial Blog - Tips for Finding Your Life Partner",
  description: "Detailed blog post with tips and advice on finding the perfect partner through our matrimonial platform.",
};

const SingleBlogPage = async () => {
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
                src="/images/hero02.jpg"
                width={300}
                height={180}
                alt="Marriage"
                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <Image
                src="/images/hero01.jpg"
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

export default SingleBlogPage;

