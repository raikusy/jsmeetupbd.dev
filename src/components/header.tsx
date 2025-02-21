"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-500">
            JS Meetup Bangladesh
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#about"
              className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              About
            </Link>
            <Link
              href="#events"
              className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Events
            </Link>
            <Link
              href="#speakers"
              className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Speakers
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <button
              className="md:hidden ml-4 text-gray-800 dark:text-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <Link
              href="#about"
              className="block text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              About
            </Link>
            <Link
              href="#events"
              className="block text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Events
            </Link>
            <Link
              href="#speakers"
              className="block text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Speakers
            </Link>
            <Link
              href="#contact"
              className="block text-gray-800 dark:text-gray-200 hover:text-yellow-500"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
