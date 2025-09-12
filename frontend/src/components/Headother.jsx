import React from 'react'
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import {  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhatsapButton from "./WhatsapButton";
import logo from "../assets/logo.png";

export default function Headother({ bgImage, title, subtitle }) {
  return (
      <div className="relative">
           {/* Background image */}
           <div
             className="h-[450px] bg-cover bg-center"
             style={{ backgroundImage: `url(${bgImage})` }}
           >
             {/* Overlay for dim effect */}
             <div className="absolute inset-0 bg-black/50"></div>
     
             {/* Top bar */}
             <div className="relative z-10 bg-gray-900/50 text-white py-2">
               <div className="max-w-7xl mx-auto flex justify-between gap-60 items-center">
                 <div className="flex gap-3 text-base">
                   <IoMdMail className="text-lg" /> email@example.com
                 </div>
                 <div className="w-[500px] overflow-hidden">
              <p
                className="whitespace-nowrap inline-block"
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
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-pink-400">
                     <FaInstagram className="text-gray-800" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
                 <WhatsapButton subject="iconi" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-600">
                     <Link to="https://www.linkedin.com/in/bright-mind-publication-528b44383/"><FaLinkedinIn className="text-gray-800" /></Link>
                   </div>
                 </div>
               </div>
             </div>
     
             {/* Navbar */}
             <div className="relative z-10 bg-gray-900/30 text-white h-[404px]">
             <div className="flex flex-col">
                <div className=" flex-row max-w-7xl mx-auto flex justify-between gap-[600px] items-center">
                 {/* Logo */}
<div className="text-2xl font-bold flex flex-row">
                <div className="w-[90px]"><img src={logo} alt="BM Publication Logo" /></div>
                <div className="mt-5">BM Publication</div>
              </div>     
                 {/* Navbar links */}
                 <div>
                     <nav>
                   <ul className="flex space-x-6">
                     <li className="cursor-pointer hover:text-gray-300"><Link to="/">Home</Link></li>
                     <li className="cursor-pointer hover:text-gray-300"><Link to="/about">About</Link></li>

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
                <div className=" mt-[100px] flex flex-col mx-auto ">
           <motion.div
             className="text-6xl font-bold mb-6 text-center"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0 }}
           >
             {title}
           </motion.div>
     
     
           <motion.div
             className="w-[500px] text-center"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1 }}
           >
             {subtitle}
           </motion.div>
         </div>
             </div>
               
             </div>
           </div>
         </div>
  )
}
