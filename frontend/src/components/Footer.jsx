import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link} from "react-router-dom";
import WhatsapButton from "./WhatsapButton";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-neutral-500 text-white py-6">
      {/* Grid with equal columns */}
      <div className="grid grid-cols-4 gap-20 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold text-4xl mb-8">BM Publication</h2>
          <p className="text-base text-gray-300">
            Elevate your research with our support. We work with you to prepare your work for publication in leading academic journals and conference proceedings, turning your hard work into a recognized scholarly achievement.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="font-bold text-2xl mb-6">Our Services</h2>
          <ul className="space-y-1 text-base">
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/research-guidance">Research Guidance</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/research-publication">Research Publication</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /><Link to="/services/manuscript-editing">Manuscript & Thesis Support</Link>
            </li>
           
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="font-bold text-2xl mb-6">Help Links</h2>
          <ul className="space-y-1 text-base">
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /> <Link to="/about">About Us</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /> <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight /> Privacy Policy
            </li>
            <li className="flex items-center gap-2 hover:cursor-pointer hover:text-gray-400 hover:text-[17px]">
              <MdKeyboardArrowRight />
              <WhatsapButton />
            </li>
            
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="font-bold  text-2xl mb-6">Contact Us</h2>
        <div className="space-y-6">
            <div className="flex items-center gap-5 text-base border-b-1 pb-3">
            <FaPhoneAlt className="text-xl"/> 12345678
          </div>
          <div className="flex items-center gap-5 text-base border-b-1 pb-3">
            <IoMdMail  className="text-xl"/> email@example.com
          </div>
        </div>
          
        </div>
      </div>

      {/* Socials */}
      <div className="flex gap-6 mt-6 text-xl mx-26">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-pink-400">
          <FaInstagram className="text-gray-800" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-400">
          <FaTwitter className="text-gray-800" />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-blue-600">
          <FaLinkedinIn className="text-gray-800" />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-10 text-sm text-gray-400 max-w-7xl mx-auto border-t-1 pt-4 ">
        <div>All rights reserved by APA Publications</div>
        <div>Designed by Briz</div>
      </div>
    </div>
  );
}
