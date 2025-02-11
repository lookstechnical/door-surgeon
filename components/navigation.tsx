"use client";

import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import { Whatsapp } from "./icons/whatsapp";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-10 md:pb-0">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex flex-1 justify-center md:justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-primary h-20 md:h-28 block max-w-[60%] md:max-w-[25%]"
              >
                <Image
                  alt="The door surgeon logo"
                  src="/img/the-door-suregeon-logo.png"
                  className="h-full w-full object-fit"
                  width={300}
                  height={300}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary"
                >
                  Contact
                </Link>
              </div>

              <div className="flex flex-row justify-center items-center gap-4">
                <Link
                  href="tel:07912 294 111"
                  className="hidden md:flex bg-white hover:bg-white/5 max-h-20 border-primary border-2 text-primary mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
                >
                  <PhoneCall className="mr-2 h-4 w-4 " /> 07912 294 111
                </Link>
                <Link
                  href="https://wa.me/07912294111"
                  className="hidden md:flex bg-primary hover:bg-primary max-h-20 text-white mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
                >
                  <Whatsapp className="mr-2 h-4 w-4" /> Whatsapp
                </Link>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="block md:hidden flex flex-row justify-center items-center gap-4 relative top-20">
        <Link
          href="tel:07912 294 111"
          className="md:flex bg-white hover:bg-white/5 max-h-20 border-primary border-2 text-primary mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
        >
          <PhoneCall className="mr-2 h-4 w-4 " /> 07912 294 111
        </Link>
        <Link
          href="https://wa.me/07912294111"
          className="md:flex bg-primary hover:bg-primary max-h-20 text-white mx-4 block button flex flex-row justify-center items-center py-3 px-4 rounded-xl"
        >
          <Whatsapp className="mr-2 h-4 w-4" /> Whatsapp
        </Link>
      </div>
    </div>
  );
}
