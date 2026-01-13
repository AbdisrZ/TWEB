"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, FlaskConical, Stethoscope, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsProductOpen(false); // Reset product menu on close
  };

  const productLinks = [
    { name: "Laboratory Supply", href: "/produk/laboratory-supply", icon: <FlaskConical className="w-4 h-4 mr-2" /> },
    { name: "Medical Equipment", href: "/produk/medical-equipment", icon: <Stethoscope className="w-4 h-4 mr-2" /> },
    { name: "General Trade", href: "/produk/general-trade", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">TRISNA</span>
              <span className="text-2xl font-bold text-secondary ml-1">WIRATAMA</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/tentang-kami" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Tentang Kami
            </Link>
            
            {/* Product Dropdown */}
            <div className="relative group">
              <button 
                className="group inline-flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
              >
                Produk
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 pt-2">
                <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                  <div className="py-1">
                    <Link href="/produk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary font-semibold border-b border-gray-100">
                      Lihat Semua Produk
                    </Link>
                    {productLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/keunggulan" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Keunggulan
            </Link>
            <Link href="/artikel" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Artikel
            </Link>
            <Link
              href="/kontak"
              className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
            >
              Minta Penawaran
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/tentang-kami"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Tentang Kami
            </Link>
            
            {/* Mobile Product Accordion */}
            <div>
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              >
                <span>Produk</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductOpen && (
                <div className="pl-4 space-y-1 bg-gray-50 rounded-md mb-2">
                  <Link
                    href="/produk"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-primary"
                  >
                    Semua Produk
                  </Link>
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/keunggulan"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Keunggulan
            </Link>
            <Link
              href="/artikel"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Artikel
            </Link>
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white px-4 py-3 rounded-md text-base font-medium mt-4 shadow-md"
            >
              Minta Penawaran
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;