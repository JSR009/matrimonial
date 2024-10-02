// import BlogData from "@/components/Blog/blogData";
// import BlogItem from "@/components/Blog/BlogItem";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog Page - Solid SaaS Boilerplate",
//   description: "This is Blog page for Solid Pro",
//   // other metadata
// };

// const BlogPage = async () => {
//   return (
//     <>
//       {/* <!-- ===== Blog Grid Start ===== --> */}
//       <section className="py-20 lg:py-25 xl:py-30">
//         <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
//           <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
//             {BlogData.map((post, key) => (
//               <BlogItem key={key} blog={post} />
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Blog Grid End ===== --> */}
//     </>
//   );
// };

// export default BlogPage;




import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { FaCalendarAlt, FaRegComments } from "react-icons/fa"; // Importing icons for styling
import { motion } from "framer-motion"; // For sleek animations
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <motion.div
                key={key}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: key * 0.1 }}
              >
                <BlogItem blog={post} />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <FaCalendarAlt className="mr-2" /> {post.date}
                    <FaRegComments className="ml-4 mr-2" /> {post.comments} Comments
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.description ? post.description.slice(0, 100) : "No description available"}...
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
