"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/icon.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Past Events", href: "/pastevents" },
    // { name: "Blogs", href: "/blogs" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact Us", href: "/contact" },
    { name: "Register", href: "/register", special: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-blue-950 py-6 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <p
            className={`text-2xl font-bold ${
              scrolled ? "text-blue-600" : "text-white"
            } transition`}
          >
            <Image
              src={Logo}
              alt="India Property Show"
              className="max-w-60 pt-5"
            />
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) =>
            link.special ? (
              <Link key={link.name} href={link.href}>
                <p className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  {link.name}
                </p>
              </Link>
            ) : (
              <Link key={link.name} href={link.href}>
                <p
                  className={`font-medium transition ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-white" // Keep text white for all states
                  } hover:text-blue-600`}
                >
                  {link.name}
                </p>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-blue-600 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <p
                  className={`block font-medium ${
                    link.special
                      ? "px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
                      : "text-black hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu after clicking a link
                >
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
