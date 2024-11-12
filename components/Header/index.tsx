"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";
import dynamic from "next/dynamic";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/astrology", label: "Numerology" },
  { href: "/contact", label: "Contact us" },
];

const Header = () => {
  const navRef = useRef(null);
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
      if (navRef.current && !(navRef.current as HTMLDivElement).contains(event.target as Node)) {
        setNavbar(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    router.prefetch('/profile');
    router.prefetch('/register');
    router.prefetch('/login');
  }, [router]);

  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="flex justify-between items-center p-3 md:px-6">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/images/logo3.jpeg"
              alt="logo"
              height={60}
              width={60}
              className="rounded-full border border-gray-300 shadow-lg object-cover"
              priority
            />
          </Link>

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

          <div
            ref={navRef}
            className={`${
              navbar ? "translate-x-0" : "-translate-x-full"
            } fixed top-0 left-0 w-3/4 h-full bg-white md:bg-transparent md:static md:flex md:translate-x-0 transition-transform duration-200 ease-in-out z-20`}
          >
            <div className="flex flex-col items-center mt-20 space-y-6 md:flex-row md:space-y-0 md:space-x-4 md:mt-0 md:ml-[-20]">
              <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className="text-lg text-gray-600 hover:text-purple-600 transition-all"
                  >
                    <Link href={item.href} onClick={closeNavbar} prefetch>
                      <span className="hover:bg-white hover:bg-opacity-40 hover:rounded-lg p-2 transition-all duration-200">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:ml-auto ml-10">
                {isAuthenticated ? (
                  <>
                    <Link href="/profile" prefetch>
                      <button
                        onClick={closeNavbar}
                        className="px-5 py-2 text-center text-white bg-gradient-to-r from-green-500 to-green-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto hidden lg:inline-block"
                      >
                        My Profile
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-5 py-2 text-center text-white bg-gradient-to-r from-red-500 to-red-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto hidden lg:inline-block"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/register" prefetch>
                      <button
                        onClick={closeNavbar}
                        className="px-5 py-2 text-center text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto hidden lg:inline-block"
                      >
                        Register
                      </button>
                    </Link>
                    <Link href="/login" prefetch>
                      <button
                        onClick={closeNavbar}
                        className="px-5 py-2 text-center text-white bg-gradient-to-r from-gray-500 to-gray-700 rounded-md shadow-lg hover:shadow-xl transition-all w-full md:w-auto hidden lg:inline-block"
                      >
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

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
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
