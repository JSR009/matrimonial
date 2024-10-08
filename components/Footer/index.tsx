import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Our Company</h3>
          <p className="text-gray-400">
            We provide the best matrimonial services to help you find your perfect match. Our platform offers personalized matchmaking, advanced search filters, and dedicated support.
          </p>
          <p className="text-gray-400">© 2024 Matrimony Services</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-green-400 transition duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-400 transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition duration-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Follow Us</h3>
          <p className="text-gray-400">
            Stay connected with us through social media.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white transition duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition duration-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-5">
        <p className="text-center text-gray-400">
          © 2024 Matrimony Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
