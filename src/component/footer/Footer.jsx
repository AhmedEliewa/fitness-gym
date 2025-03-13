import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            We provide the best fitness equipment and training programs to help
            you achieve your health goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                trainer
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                program
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                blogs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-3">
            Subscribe to get the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-md text-gray-800"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FitnessGym. All rights reserved.
      </div>
    </footer>
  );
}
