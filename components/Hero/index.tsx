// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const Hero = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
//             <div className=" md:w-1/2">
//               <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
//                 🔥 Matrimonial - A Platform for searching life partners
//               </h4>
//               <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
//                 Platform For Searching Life{"   "}
//                 <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
//                   Partner.
//                 </span>
//               </h1>
//               <p>
//               At our platform, we believe in the beauty of love and the importance of family. Our mission is to create a safe and trusted platform for individuals to find their life partners. With a user-friendly interface and advanced matchmaking technology, we facilitate connections that are genuine and lasting.
//               </p>

//               <div className="mt-10">
//                 <form onSubmit={handleSubmit}>
//                   <div className="flex flex-wrap gap-5">
//                     <input
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       type="text"
//                       placeholder="Enter your email address"
//                       className="rounded-md border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
//                     />
//                     <button
//                       aria-label="get started button"
//                       className="flex rounded-md bg-black p-1 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
//                     >
//                       Get Started
//                     </button>
//                   </div>
//                 </form>

//                 {/* <p className="mt-5 text-black dark:text-white">
//                   Try for free no credit card required.
//                 </p> */}
//               </div>
//             </div>

//             {/* <div className="animate_right hidden md:w-1/2 lg:block">
//               <div className="relative 2xl:-mr-7.5">
//                 <Image
//                   src="/images/hero01.jpg"
//                   alt="shape"
//                   width={46}
//                   height={246}
//                   className="absolute -left-11.5 top-0"
//                 />
//                 <Image
//                   src="/images/hero01.jpg"
//                   alt="shape"
//                   width={36.9}
//                   height={36.7}
//                   className="absolute bottom-0 right-0 z-10"
//                 /> */}
//                 {/* <Image
//                   src="/images/shape/shape-03.svg"
//                   alt="shape"
//                   width={21.64}
//                   height={21.66}
//                   className="absolute -right-6.5 bottom-0 z-1"
//                 />
//                 <div className=" relative aspect-[700/444] w-full">
//                   <Image
//                     className="shadow-solid-l dark:hidden"
//                     src="/images/hero02.jpg"
//                     alt="Hero"
//                     fill
//                   />
//                   <Image
//                     className="hidden shadow-solid-l dark:block"
//                     src="/images/hero02.jpg"
//                     alt="Hero"
//                     fill
//                   />
//                 </div>
//               </div> */}
//               <div className="animate_right hidden md:w-1/2 lg:block">
//   <div className="relative 2xl:-mr-7.5">
//     {/* Top Image with cool shape */}
//     <Image
//       src="/images/hero01.jpg"
//       alt="Decorative Shape"
//       width={80}
//       height={200}
//       className="absolute -left-14 top-0 z-20 transform rotate-12 opacity-90"
//     />

//     {/* Background image with a vibrant effect */}
//     <Image
//       src="/images/background-pattern.svg"
//       alt="Background"
//       width={500}
//       height={500}
//       className="absolute top-0 left-0 opacity-30"
//     />

//     {/* New decorative image in the center */}
//     <Image
//       src="/images/decorative-shape.svg"
//       alt="Decorative Center Shape"
//       width={100}
//       height={100}
//       className="absolute left-10 top-10 z-5 animate-bounce"
//     />

//     {/* Main Hero Image with shadow */}
//     <div className="relative aspect-[700/444] w-full">
//       <Image
//         className="shadow-xl rounded-lg dark:hidden"
//         src="/images/hero01.jpg"
//         alt="Hero Image"
//         fill
//       />
//       <Image
//         className="hidden shadow-xl rounded-lg dark:block"
//         src="/images/hero01.jpg"
//         alt="Hero Dark Image"
//         fill
//       />
//     </div>

//     {/* Bottom image with some creative positioning */}
//     <Image
//       src="/images/hero02.jpg"
//       alt="Shape"
//       width={120}
//       height={120}
//       className="absolute bottom-0 right-0 z-10 opacity-75 transform scale-110"
//     />

//     {/* Extra decorative image to the right */}
//     <Image
//       src="/images/hero02.jpg"
//       alt="Side Decor"
//       width={150}
//       height={150}
//       className="absolute -right-10 bottom-5 z-1 transform rotate-45"
//     />

//     {/* Small animated shape at bottom */}
//     <Image
//       src="/images/hero02.jpg"
//       alt="Small Shape"
//       width={50}
//       height={50}
//       className="absolute right-5 bottom-2 z-10 animate-pulse"
//     />
//   </div>
// </div>

//             {/* </div> */}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;




// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const Hero = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     // Handle email submission (add functionality as required)
//   };

//   return (
//     <section className=" py-10 px-4 md:py-8 bg-white text-gray-800 z-0">
//       {/* Adding Top Padding to Avoid Overlapping with Header */}
//       <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8 pt-16 md:pt-20">
//         {/* Left Section - Text & Form */}
//         <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-6">
//           <h4 className="text-lg font-medium tracking-widest text-gray-500">
//             🔥 The Perfect Matrimonial Platform
//           </h4>
//           <h1 className="text-4xl font-extrabold leading-snug md:text-5xl xl:text-6xl">
//             Find Your{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
//               Life Partner
//             </span>{" "}
//             with Ease
//           </h1>
//           <p className="leading-relaxed text-gray-500">
//             Discover meaningful connections with a platform that values trust,
//             privacy, and genuine relationships. Join us today for a journey
//             towards love.
//           </p>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col md:flex-row gap-4"
//           >
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter your email"
//               className="flex-grow rounded-lg px-4 py-3 border-2 border-gray-300 focus:border-gray-900 transition duration-300"
//             />
//             <button
//               type="submit"
//               className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               Get Started
//             </button>
//           </form>
//         </div>

//         {/* Right Section - Staggered Grid Images with Animations */}
//         <div className="col-span-12 lg:col-span-7 grid grid-cols-3 grid-rows-4 gap-4 relative">
//           {/* Image 1 (Large) */}
//           <div className="relative row-span-2 col-span-2 transform hover:scale-110 hover:rotate-1 transition-all duration-500 ease-in-out">
//             <Image
//               src="/images/hero07.jpg"
//               alt="Main Hero Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-xl"
//             />
//           </div>

//           {/* Image 2 (Tall Image) */}
//           <div className="relative row-span-3 col-span-1 transform hover:scale-105 transition-all duration-500 ease-in-out">
//             <Image
//               src="/images/hero03.jpg"
//               alt="Tall Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Image 3 (Wide Image) */}
//           <div className="relative row-span-1 col-span-2 transform hover:scale-105 transition-all duration-500 ease-in-out">
//             <Image
//               src="/images/hero04.jpg"
//               alt="Wide Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Image 4 (Small Square) */}
//           {/* <div className="relative row-span-1 col-span-1 transform hover:scale-105 hover:rotate-3 transition-all duration-500 ease-in-out">
//             <Image
//               src="https://source.unsplash.com/400x400/?wedding,engagement"
//               alt="Small Square Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-lg"
//             />
//           </div> */}

//           {/* Image 5 (Large Tall Image) */}
//           <div className="relative row-span-2 col-span-2 transform hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out">
//             <Image
//               src="/images/hero02.jpg"
//               alt="Large Tall Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-xl"
//             />
//           </div>

//           {/* Central Rotating Image */}
//           <div className="relative row-span-2 col-span-1 transform hover:rotate-6 transition-all duration-500 ease-in-out">
//             <Image
//               src="/images/hero05.jpg"
//               alt="Central Rotating Image"
//               layout="fill"
//               className="object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle email submission (add functionality as required)
  };

  return (
    <section className="py-10 px-4 md:py-8 bg-white text-gray-800 z-0">
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl pt-16 md:pt-20">
        {/* Left Section - Text & Form */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center space-y-6">
            <h4 className="text-lg font-medium tracking-widest text-gray-500">
              🔥 The Perfect Matrimonial Platform
            </h4>
            <h1 className="text-4xl font-extrabold leading-snug md:text-5xl xl:text-6xl">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
                Life Partner
              </span>{" "}
              with Ease
            </h1>
            <p className="leading-relaxed text-gray-500">
              Discover meaningful connections with a platform that values trust,
              privacy, and genuine relationships. Join us today for a journey
              towards love.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg px-4 py-3 border-2 border-gray-300 focus:border-gray-900 transition duration-300"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Get Started
              </button>
            </form>
          </div>

          {/* Right Section - Images */}
          <div className="col-span-12 lg:col-span-7">
            {/* New Theme for Small Devices */}
            <div className="block lg:hidden">
              {/* Grid for Small Devices */}
              <div className="grid grid-cols-1 gap-4">
                {/* Image 1 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero07.jpg"
                    alt="Main Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 2 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 3 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero04.jpg"
                    alt="Wide Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 4 */}
                <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero02.jpg"
                    alt="Large Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 5 */}
                <div className="relative w-full h-64 transform hover:rotate-6 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Central Rotating Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Previous Theme for Large Devices */}
            <div className="hidden lg:block">
              {/* Grid for Large Devices */}
              <div className="grid grid-cols-12 grid-rows-6 gap-4 relative">
                {/* Image 1 */}
                <div className="relative row-span-12 col-span-6 transform hover:scale-110 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero07.jpg"
                    alt="Main Hero Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 2 */}
                <div className="relative row-span-12 col-span-3 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 3 */}
                <div className="relative row-span-12 col-span-2 transform hover:scale-105 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero04.jpg"
                    alt="Wide Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </div>
                {/* Image 4 */}
                <div className="relative row-span-12 col-span-6 transform hover:scale-110 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero02.jpg"
                    alt="Large Tall Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
                {/* Image 5 */}
                <div className="relative row-span-12 col-span-6 transform hover:rotate-6 transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/hero05.jpg"
                    alt="Central Rotating Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


