"use client";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // State to track if the navbar should be visible or hidden
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep track of the last scroll position to calculate direction
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Color and Height Logic (Activates after 10px)
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Smart Hide/Show Logic
      // If we are scrolling DOWN and we are past the 100px mark, hide it
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // If we are scrolling UP or we are at the very top, show it
        setIsVisible(true);
      }

      // Update the last scroll position for the next calculation
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || isOpen;

  // Force visibility if the mobile menu is open so it doesn't disappear on them
  const showHeader = isVisible || isOpen;

  const navBgClass = isSolid
    ? "bg-white/95 backdrop-blur-md border-b border-jmde-border shadow-md"
    : "bg-transparent border-b border-transparent shadow-none";

  const linkColorClass = isSolid
    ? "text-jmde-text hover:text-jmde-orange"
    : "text-white/90 hover:text-jmde-orange";

  const menuIconColorClass = isSolid ? "text-jmde-text" : "text-white";

  const logoFilterClass = isSolid
    ? "brightness-100 invert-0"
    : "brightness-0 invert";

  const headerHeightClass = isSolid ? "h-20" : "h-24 lg:h-28";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navBgClass} ${
        // Glides the navbar out of view (-100% of its height) when hidden
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* =========================================
          TOP CONTACT BAR (HIDDEN ON MOBILE)
      ========================================== */}
      <div
        className={`hidden lg:block w-full border-b transition-colors duration-500 ${isSolid ? "border-jmde-border" : "border-white/10"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1.5 text-[12px] tracking-widest">
          <a
            href="mailto:jaimatadienterprises020@gmail.com"
            className={`flex items-center gap-2 transition-colors ${isSolid ? "text-jmde-text hover:text-jmde-orange" : "text-white/80 hover:text-white"}`}
          >
            <MdEmail className="w-3.5 h-3.5 text-jmde-orange" />
            jaimatadienterprises020@gmail.com
          </a>

          <div className="flex items-center gap-6">
            <a
              href="tel:+919557905990"
              className={`flex items-center gap-2 transition-colors ${isSolid ? "text-jmde-text hover:text-jmde-orange" : "text-white/80 hover:text-white"}`}
            >
              <GiRotaryPhone className="w-4 h-4 text-jmde-orange" />
              +91 9557905990 | +91 7351905990
            </a>
            {/* <span
              className={`opacity-30 ${isSolid ? "text-jmde-text" : "text-white/80"}`}
            >
              |
            </span>
            <a
              href="tel:+917351905990"
              className={`transition-colors ${isSolid ? "text-jmde-text hover:text-jmde-orange" : "text-white/80 hover:text-white"}`}
            >
              +91 7351905990
            </a> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ease-in-out ${headerHeightClass}`}
        >
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/jmd_logo_1.png"
                alt="JMDE Logo"
                className={`h-30 w-auto object-contain transition-all duration-500 ${logoFilterClass}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-300 ${linkColorClass}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${menuIconColorClass}`}
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
      </div>

      {/* =========================================
          UPDATED: FULL-SCREEN MOBILE NAVIGATION
      ========================================== */}
      <div
        className={`lg:hidden fixed inset-0 h-screen w-full bg-[#F8F9FB] flex flex-col transition-all duration-300 ease-in-out -z-10 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Spacer to push content exactly below the Logo & Cross Icon section */}
        <div className={`${headerHeightClass} w-full shrink-0`}></div>

        {/* 1. Divider just after the logo and cross icon section (Not full width, Orange) */}
        <div className="w-full flex justify-center mb-10">
          <div className="w-full h-[2px] bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full"></div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center flex-grow w-full px-6 pb-6 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center w-full">
              <Link
                href={link.href}
                className="text-xl font-black text-jmde-blue hover:text-jmde-orange transition-colors tracking-wide py-5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>

              {/* 2. Divider after every navlink (Not full width, Orange) */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-jmde-orange to-[#ff8c5a]  rounded-full"></div>
            </div>
          ))}

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a
              href="tel:+919557905990"
              className="flex items-center gap-2 text-[13px] font-bold tracking-widest text-gray-500"
            >
              <GiRotaryPhone className="w-5.5 h-5.5 text-jmde-orange" />
              +91 9557905990 / 7351905990
            </a>
            <a
              href="mailto:jaimatadienterprises020@gmail.com"
              className="flex items-center gap-2 text-[13px] font-bold tracking-widest text-gray-500"
            >
              <MdEmail className="w-4.5 h-4.5 text-jmde-orange" />
              jaimatadienterprises020@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
