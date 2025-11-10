import React from 'react'
import { FaWhatsapp} from "react-icons/fa";

export default function WhatsapButton({subject}) {
     const adminNumber = "7776054424";
  return (
      // Replace with your admin's WhatsApp number

 
    <a
      href={`https://wa.me/${adminNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="  text-white  hover:text-gray-400 hover:text-[17px] transition"
    >
       <div>
      {subject === "iconi" ? <FaWhatsapp size={23}  className='text-gray-800' /> : subject}
    </div>
    </a>
  
  )
}
