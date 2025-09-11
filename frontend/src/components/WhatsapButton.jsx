import React from 'react'

export default function WhatsapButton() {
     const adminNumber = "9065256852";
  return (
      // Replace with your admin's WhatsApp number

 
    <a
      href={`https://wa.me/${adminNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="  text-white  hover:text-gray-400 hover:text-[17px] transition"
    >
      <div>Chat on Whatsapp</div>
    </a>
  
  )
}
