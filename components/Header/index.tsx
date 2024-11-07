"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";

// Move navItems outside the component to avoid recreating on each render
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/astrology", label: "Numerology" },
  { href: "/contact", label: "Contact Us" },
];

function Header() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
    setNavbar(false);
  };

  const closeNavbar = useCallback(() => setNavbar(false), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center p-4 md:px-8">
          {/* LOGO */}
          <Link href="/" className="text-2xl text-cyan-600 font-bold">
            <Image src="/images/logo2.jpeg" alt="logo" height={60} width={60} />
          </Link>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)} className="p-2">
              <Image
                src={navbar ? "/images/close.svg" : "/images/menu.svg"}
                width={30}
                height={30}
                alt="menu toggle"
              />
            </button>
          </div>

          {/* NAVIGATION LINKS */}
          <div
            ref={navRef}
            className={`${
              navbar ? "translate-x-0" : "-translate-x-full"
            } fixed top-0 left-0 w-3/4 h-full bg-white md:bg-transparent md:static md:flex md:translate-x-0 transition-transform duration-200 ease-in-out z-20`}
          >
            <div className="flex flex-col items-center mt-20 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:mt-0">
              <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className="text-lg text-gray-600 hover:text-purple-600 transition-all relative"
                  >
                    <Link href={item.href} onClick={closeNavbar}>
                      <span className="hover:bg-white hover:bg-opacity-40 hover:rounded-lg p-2 transition-all duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* AUTH BUTTONS */}
              <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:ml-4">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="ml-8 px-5 py-2 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md shadow-lg hover:shadow-xl transition w-full md:w-auto"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link href="/register">
                      <button
                        onClick={closeNavbar}
                        className="px-5 py-2 text-center text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                      >
                        Register
                      </button>
                    </Link>
                    <Link href="/login">
                      <button
                        onClick={closeNavbar}
                        className="px-5 py-2 text-center text-white bg-gradient-to-r from-gray-500 to-gray-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto"
                      >
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* OVERLAY BACKGROUND */}
          {navbar && (
            <div
              onClick={closeNavbar}
              className="fixed inset-0 bg-black opacity-30 z-10 md:hidden"
            ></div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
