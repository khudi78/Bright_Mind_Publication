import React from "react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link} from "react-router-dom";
import WhatsapButton from "./WhatsapButton";
import img2 from "../assets/img2.jpg"

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-neutral-500 text-white py-6">
      {/* Grid with equal columns */}
      <div className="grid grid-rows-1 sm:grid-cols-4 gap-5 sm:gap-[80px]  sm:max-w-7xl mx-2 sm:mx-auto">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold text-2xl sm:text-4xl mb-1 sm:mb-8">BM Publication</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Elevate your research with our support. We work with you to prepare your work for publication in leading academic journals and conference proceedings, turning your hard work into a recognized scholarly achievement.
          </p>
        </div>
        {/* Column 2 */}
        <div>
          <h2 className="font-bold text-lg sm:text-2xl mb-1 sm:mb-6">Our Services</h2>
          <ul className="space-y-1 text-sm sm:text-base">
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/research-guidance">Research Guidance</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/research-publication">Research Publication</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/manuscript-editing">Manuscript & Thesis Support</Link>
            </li>
           
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-bold text-lg sm:text-2xl mb-2 sm:mb-6">Help Links</h2>
          <ul className="space-y-1 text-sm sm:text-base">
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /> <Link to="/about">About Us</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /> <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight /> <Link to="/policy">Privacy Policy</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[15px] sm:hover:text-[17px]">
              <MdKeyboardArrowRight />
              <WhatsapButton subject="Chat on WhatsApp" />
            </li>
            
          </ul>
        </div>
         
        {/* Column 4 */}
        <div>
          <h2 className="font-bold  text-lg sm:text-2xl mb-2 sm:mb-6">Contact Us</h2>
        <div className=" space-y-2 sm:space-y-6">
            <div className="flex items-center gap-5 text-sm sm:text-base border-b-1 pb-3">
            <FaPhoneAlt className="text-base sm:text-xl"/> +91 77760 54424
          </div>
          <div className="flex items-center gap-5 text-sm sm:text-base border-b-1 pb-3">
            <IoMdMail  className="text-base sm:text-xl"/> support@bmpublication.com
          </div>

        </div>
          
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-col sm:flex-row sm:w-[1310px] gap-2 sm:justify-between mt-[-140px] sm:mt-[-80px] text-xl mx-20 sm:mx-14">
       <div className="flex gap-4 ml-5 sm:ml-12 mt-40">
         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-pink-400">
          <Link to="https://www.instagram.com/brightmind_publications?igsh=cXFxeTlveXZoNXlq"><FaInstagram className="text-gray-800" /></Link>
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-green-400">
          <WhatsapButton subject="iconi" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
         <Link to="https://www.linkedin.com/in/bright-mind-publication-528b44383/">  <FaLinkedinIn className="text-gray-800" /></Link>
        </div> 
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-600">
         <Link to="https://www.facebook.com/share/1GcP9AAxTb/">  <FaFacebookF className="text-gray-800" /></Link>
        </div> 
        </div>
          <div>
           <div className="ml-12">
             <img className=" w-[150px] h-[150px] " src={img2} alt="" />
             <div className="ml-[-7px] text-lg">Scan this for quick chat</div>
             {/* <div className="ml-16 text-sm">OR</div> */}
          </div>
          {/* <div className="mt-[-4px] ml-14 text-lg hover:text-gray-800 hover:cursor-pointer hover:underline"><Link to="https://whatsapp.com/channel/0029VbB3tqV8F2pMRpd4q20a ">Follow our channel</Link></div> */}
          </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between mx-2 sm:m-2 items-center  text-sm text-gray-400 max-w-7xl sm:mx-auto border-t-1 pt-4 ">
        <div>All rights reserved by BM Publications</div>
        <div>Designed by Briz</div>
      </div>
    </div>
  );
}
