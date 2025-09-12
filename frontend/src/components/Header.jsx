import React from "react";
import { IoMdMail } from "react-icons/io";
import {  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import WhatsapButton from "./WhatsapButton";

export default function Header({ bgImage }) {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="h-[500px] sm:h-[690px]  bg-cover bg-center"
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
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
                 <WhatsapButton subject="iconi" />
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-600">
                <Link to="https://www.linkedin.com/in/bright-mind-publication-528b44383/"><FaLinkedinIn className="text-gray-800" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-10 bg-gray-900/30 text-white  h-[455px] sm:h-[640px]">
          <div className="flex flex-col">
            <div className=" flex-row w-full sm:max-w-7xl mx-auto flex justify-between gap-[] sm:gap-[600px] items-center">
              {/* Logo */}
              <div className="text-2xl font-bold flex flex-row">
                <div className="w-[90px]"><img src={logo} alt="BM Publication Logo" /></div>
                <div className="mt-5">BM Publication</div>
              </div>

              {/* Navbar links */}
              <div>
                <nav>
                  <ul className="flex space-x-6">
                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="cursor-pointer hover:text-gray-300">
                      <Link to="/about">About</Link>
                    </li>

                    {/* Services with dropdown */}
                   <li className="relative group cursor-pointer hover:text-gray-300">
  <Link to="/services">Services</Link>

  {/* Dropdown */}
  <ul className="absolute left-0 hidden w-60 border-y-neutral-400  border-y-3 bg-white text-gray-800 text-sm shadow-md shadow-gray-400 group-hover:block">
    <li className="py-3 w-52 mx-auto border-b border-gray-300 hover:underline">
      <Link to="/services/research-guidance">Research Guidance</Link>
    </li>
    <li className="py-3 w-52 mx-auto border-b border-gray-300 hover:underline ">
      <Link to="/services/research-publication">Research Publication</Link>
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
            <div className="w-[1000px] mt-[200px] flex flex-col ml-[130px]">
              <motion.div
                className="text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
              >
                Bright Mind Publication
              </motion.div>

              <motion.div
                className="text-3xl font-semibold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Vision, Our Expertise
              </motion.div>

              <motion.div
                className="w-[500px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Elevate your research with our support. We work with you to
                prepare your work for publication in leading academic journals
                and conference proceedings, turning your hard work into a
                recognized scholarly achievement.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
