import React,{useState} from "react";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import { FiMenu, FiX } from "react-icons/fi"; // menu and close icons
import WhatsapButton from "./WhatsapButton";

export default function Header({ bgImage }) {
    const [isOpen, setIsOpen] = useState(false);
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
            <div className="flex gap-3 text-sm sm:text-base ">
              <IoMdMail className="text-lg sm:mt-[5px]" /> <Link to="/contact">support@bmpublication.com</Link>
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
                <Link to="https://www.instagram.com/brightmind_publications?igsh=cXFxeTlveXZoNXlq"><FaInstagram className="text-gray-800" /></Link>
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-green-400">
                 <WhatsapButton subject="iconi" />
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
                <Link to="https://www.linkedin.com/in/bright-mind-publication-528b44383/"><FaLinkedinIn className="text-gray-800" /></Link>
              </div>
              <div className="sm:w-8 sm:h-8 w-7 h-7 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-600">
                <Link to="https://www.facebook.com/share/1GcP9AAxTb/"><FaFacebookF className="text-gray-800 " /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-10 bg-gray-500/20 text-white  h-[455px] sm:h-[640px]">
          <div className="flex flex-col">
            <div className=" flex-row w-full sm:max-w-7xl mx-auto flex justify-between gap-[] sm:gap-[600px] items-center">
              {/* Logo */}
              <div className="pl-2 text-xl sm:text-2xl font-bold flex flex-row">
                <div className="w-[60px] sm:w-[90px]"><img src={logo1} alt="BM Publication Logo" /></div>
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
                <Link to="/services/research-guidance">Research Guidance</Link>
              </li>
              <li className="py-3 w-52 mx-auto border-b border-gray-300 hover:underline">
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
            <div className="sm:w-[1000px] sm:mt-[200px] mt-[150px] flex flex-col sm:ml-[130px] ml-[27px]">
              <motion.div
                className="text-2xl sm:text-6xl font-bold mb-2 sm:mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
              >
                Bright Mind Publication
              </motion.div>

              <motion.div
                className="text:xl sm:text-3xl font-semibold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Vision, Our Expertise
              </motion.div>

              <motion.div
                className="w-[340px] sm:w-[500px] text-sm sm:text-base"
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
