"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Building,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Agent", href: "/agent", icon: Briefcase },
    { name: "Services", href: "/services", icon: Building },
    { name: "Properties", href: "/properties", icon: MapPin },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`sticky top-0 bg-white px-4 sm:px-6 lg:px-[10%] py-4 border-b border-gray-200 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 hover:text-pink-500 transition-colors duration-300"
        >
          <div className="relative w-64 h-20">
            <Image
              src="/images/logo.png"
              alt="VipRealty Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-pink-500 transition-colors duration-300 relative group"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-gray-800 hover:text-pink-500 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 animate-spin-once" />
          ) : (
            <Menu className="w-6 h-6 animate-pulse" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-900"
            onClick={closeMenu}
          >
            <div className="relative w-64 h-20">
              <Image
                src="/images/logo.png"
                alt="VipRealty Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-800 hover:text-pink-500 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 animate-spin-once" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="py-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-6 py-4 text-lg font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300"
              onClick={closeMenu}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-spin-once {
          animation: spin 0.3s ease-in-out;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;