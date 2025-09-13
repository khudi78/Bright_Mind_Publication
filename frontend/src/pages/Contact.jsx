import React from 'react'
import Headother from '../components/Headother'
import ContactForm from '../components/ContactForm'
import WhatsapButton from '../components/WhatsapButton'

export default function Contact() {
  return (
     <>
          <Headother
            bgImage="https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D"
            title="Contact Us"
            subtitle="Have questions? We are just a message away."
          />

          <div className='flex flex-col sm:flex-row w-[370px] sm:w-[1000px] mx-auto gap-10 sm:gap-20 mt-20 mb-20 py-5 sm:py-10 shadow-2xl shadow-gray-600 p-7 bg-gray-200 '>
            <div className='flex flex-col gap-3 sm:gap-5 sm:w-[400px]'>
                <div className='text-2xl sm:text-3xl font-bold '>Reach Out to Us</div>
                <div>
                    Have a question or need assistance? Fill out the form with your details, and our team will get back to you promptly. You can also reach us directly via email or phone for quick support.
                </div>

                <div className='flex flex-col sm:w-[350px] sm:ml-13 gap-3 p-4  bg-neutral-200 border-gray-800 border-1 py-7 mt-7 rounded-sm shadow-gray-800'>
                    <div className='shadow-lg w-[200px] text-center p-3 mx-auto bg-neutral-300'>1234567890</div>
                    <div className='shadow-lg w-[200px] text-center p-3 mx-auto bg-neutral-300'>example@gmail.com</div>
                </div>
            </div>
            <div className='w-[320px] h-[3px] sm:w-[2px] sm:h-[550px] rounded-sm bg-gradient-to-b from-gray-400 to-gray-900'></div>
            <div>
                <div className='text-2xl sm:text-3xl font-bold mb-7'>Send us a message</div>
                <ContactForm />
            </div>
          </div>

            
       
        </>
  )
}
