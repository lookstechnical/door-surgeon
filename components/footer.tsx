import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Whatsapp } from "./icons/whatsapp";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white/90">
              Door Surgeon
            </h3>
            <p className="text-primary-400 mb-4">
              Professional Repair and installation services for residential and
              commercial properties in Leeds, Bradford, Wakefield and across
              West Yorkshire
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pages/The-door-surgeon/364962176914907"
                className="text-primary-200 hover:text-primary-400"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=07912294111"
                className="text-primary-200 hover:text-primary-400"
              >
                <Whatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-primary-400 hover:text-primary-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-400 hover:text-primary-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-400 hover:text-primary-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/double-glazed-unit-service"
                  className="text-primary-400 hover:text-primary-500"
                >
                  Double glazing repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/window-repair-services"
                  className="text-primary-400 hover:text-primary-500"
                >
                  Window Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/door-repair-services"
                  className="text-primary-400 hover:text-primary-500"
                >
                  Door Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white/90 text-normal">
              Contact Us
            </h3>
            <ul className="space-y-2 text-primary-400">
              {/* <li>123 something Street</li>
              <li>Bradford, West Yorkshire5</li> */}
              <li>07912 294 111</li>
              <li>thedoorsurgeon@gmail.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-400">
          <p>
            &copy; {new Date().getFullYear()} Door Surgeon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
