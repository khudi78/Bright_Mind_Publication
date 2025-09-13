import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhatsapButton from "./WhatsapButton";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // menu and close icons

export default function SubHeader({ bgImage, title, subtitle, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="h-[570px] sm:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay for dim effect */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Top bar */}
        <div className="relative z-10 bg-gray-900/50 text-white py-2">
          <div className="w-full pl-2 pr-2 sm:max-w-7xl mx-auto flex justify-between sm:gap-60 gap-1 items-center">
            <div className="flex gap-3 text-sm sm:text-base">
              <IoMdMail className="text-lg " /> email@example.com
            </div>
            <div className="w-[500px] overflow-hidden">
              <p
                className="whitespace-nowrap inline-block text-xs sm:text-base"
                style={{ animation: "marquee 10s linear infinite" }}
              >
                Bright Mind Publication — Where Ideas Shine ✨
              </p>

              <style>
                {`
                           @keyframes marquee {
                             0% { transform: translateX(100%); }
                             100% { transform: translateX(-100%); }
                           }
                         `}
              </style>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-pink-400">
                <FaInstagram className="text-gray-800" />
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-green-400">
                <WhatsapButton subject="iconi" />
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
                <Link to="https://www.linkedin.com/in/bright-mind-publication-528b44383/">
                  <FaLinkedinIn className="text-gray-800" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-10 bg-gray-900/30 text-white h-[525px] sm:h-[550px]">
          <div className="flex flex-col">
            <div className=" flex-row w-full sm:max-w-7xl mx-auto flex justify-between gap-[] sm:gap-[600px] items-center">
              {/* Logo */}
              <div className="pl-2 text-xl sm:text-2xl font-bold flex flex-row">
                <div className="w-[60px] sm:w-[90px]">
                  <img src={logo} alt="BM Publication Logo" />
                </div>
                <div className="mt-3 sm:mt-5">BM Publication</div>
              </div>

              {/* Navbar links */}
              <div>
                <nav className="flex justify-between items-center">
                  {/* Hamburger button (visible only on mobile) */}
                  <button
                    className="text-white text-2xl pr-2 sm:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </button>

                  {/* Navbar links */}
                  <ul
                    className={`flex-col sm:flex-row sm:flex space-x-0 sm:space-x-6 space-y-4 sm:space-y-0 
                                      absolute sm:static left-0 top-14 sm:top-0 w-full sm:w-auto 
                                      bg-gray-900 sm:bg-transparent text-white p-4 sm:p-0 
                                      transition-all duration-300 ease-in-out 
                                      ${isOpen ? "flex" : "hidden"}`}
                  >
                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/about">About</Link>
                    </li>

                    {/* Services with dropdown */}
                    <li className="relative group cursor-pointer hover:text-gray-300">
                      <Link to="/services">Services</Link>
                      <ul className="absolute left-0 hidden w-60 bg-white text-gray-800 text-sm shadow-md shadow-gray-400 group-hover:block">
                        <li className="py-3 w-52 mx-auto border-b border-gray-300 hover:underline">
                          <Link to="/services/research-guidance">
                            Research Guidance
                          </Link>
                        </li>
                        <li className="py-3 w-52 mx-auto border-b border-gray-300 hover:underline">
                          <Link to="/services/research-publication">
                            Research Publication
                          </Link>
                        </li>
                        <li className="py-3 w-52 mx-auto hover:underline">
                          <Link to="/services/manuscript-editing">
                            Manuscript, Thesis Writing & Editing
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/policy">Policy</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className=" mt-10 sm:mt-[150px] flex flex-col sm:flex-row  mx-auto gap-7 sm:gap-50">
              <div className="flex flex-col mx-3 sm:mx-auto sm:w-[600px]">
                <motion.div
                  className="text-3xl sm:text-6xl font-bold mb-2 sm:mb-6 "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                >
                  {title}
                </motion.div>

                <motion.div
                  className="text-sm sm:text-base sm:w-[500px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {subtitle}
                </motion.div>
              </div>

              <div className="relative sm:w-[400px] sm:h-[400px] mx-26 sm:mx-auto">
                {/* 2nd Image Container (base) */}
                <div className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px]">
                  <motion.img
                    src={image}
                    alt="Second Image"
                    className="w-full blur-sm h-full object-cover shadow-lg shadow-gray-600"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </div>

                {/* 1st Image Container (overlapping) */}
                <div className="absolute top-6 left-8 sm:top-10 sm:left-15 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px]">
                  <motion.img
                    src={image}
                    alt="First Image"
                    className="w-full h-full object-cover shadow-lg shadow-gray-600"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
