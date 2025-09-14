import { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import CardGrid from "../components/CardGrid";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Slideshow */}
      <div>
        <Header bgImage="https://wallpapers.com/images/hd/black-and-white-book-1920-x-1080-wallpaper-004yikgbyrhdwl3w.jpg" />
      </div>
      <div className=" my-10">
        {/* About us */}
        <div className="sm:w-[1200px] mx-auto flex flex-col gap-5">
          <div className="text-center text-3xl sm:text-5xl font-bold">About Us</div>
          <div className="text-center text-lg sm:text-xl">
            Accelerate your article Publication with us
          </div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 sm:mt-5">
            <div className="w-70 mx-auto sm:w-[2300px] sm:h-[500px] ">
              <img
                className="rounded-2xl shadow-2xl shadow-gray-700"
                src="https://st3.depositphotos.com/13349494/17380/i/450/depositphotos_173800336-stock-photo-man-writing-in-notepad.jpg"
                alt=""
              />
            </div>
            <div className="text-sm pl-3 pr-3 sm:text-lg">
              Bright Mind Publication is your trusted partner for scholarly
              success. We specialize in transforming your research into
              high-quality, publication-ready articles, guiding them into
              prestigious, indexed journals like SCOPUS, Web of Science, PubMed,
              and Google Scholar. We'll streamline the entire process, ensuring
              your work gets the quality and recognition it deserves.
              <Link to="/about">
              <div className="mt-7 sm:ml-0 mx-auto sm:mt-16 w-24 h-8 sm:w-30 sm:h-11 pt-1 sm:pt-2 sm:hover:w-31 sm:hover:h-12 hover:shadow-lg hover:shadow-gray-700 sm:hover:pt-3 hover:text-black hover:font-semibold hover:bg-gradient-to-br  hover:from-gray-700 hover:to-neutral-400 hover:cursor-pointer rounded-xl  text-center bg-black text-white">
                Know More
              </div></Link>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-gray-200 w-full mt-5 sm:mt-[-50px]">
          <div className="flex flex-col gap-5 py-10">
            <div className="text-center text-3xl sm:text-5xl font-bold">Our Services</div>
            <div className="text-center text-lg px-2 sm:text-xl mb-[-55px]">
              How We Help You Achieve Your Publication Goals
            </div>
           

             <CardGrid /> 
             
             <Link to="/services">
            <div className="mt-16 mb-10 hover:mb-9 mx-auto w-30 h-11 pt-2 hover:w-31 hover:h-12 hover:shadow-lg hover:text-lg hover:font-semibold hover:bg-gradient-to-br  hover:shadow-gray-700 hover:pt-3 hover:text-black hover:from-gray-700 hover:to-neutral-400 hover:cursor-pointer rounded-xl  text-center bg-black text-white">
              Know More
            </div></Link>
          </div>
        </div>

        {/* Publications */}

        <div className=" bg-[url('https://wallpapers.com/images/hd/black-and-white-book-1920-x-1080-wallpaper-004yikgbyrhdwl3w.jpg')] bg-cover bg-center sm:bg-fixed relative">
          {/* Overlay to dim background */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content sits above overlay */}
          <div className="relative z-10 w-full sm:max-w-6xl mx-auto py-10 sm:py-25 mb-[-40px] flex flex-col gap-3 sm:gap-5 text-white">
            <div className="text-center text-3xl sm:text-5xl font-bold">
              Publication Process
            </div>
            <div className="text-center text-lg sm:text-xl text-gray-200">
              Procedure we follow to publish your article
            </div>

            <div className="flex flex-row mt-15">
              {/* Left side */}
              <motion.div
                className="flex flex-col mt-10"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }} // triggers when 30% visible
              >
                <div
                  className="self-end text-xs sm:text-base w-[115px] sm:w-[150px] h-[27px] sm:h-[38px] hover:mb-[-33px] sm:hover:mb-[-22px] rounded-lg text-center pt-1 border-2 pl-1 border-gray-400
                        transition-all duration-300 overflow-hidden hover:w-[175px] sm:hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  Journal Shortlisting – We suggest suitable, credible journals
                  for your review.
                </div>

                <div
                  className=" ml-15 sm:ml-[390px] text-xs sm:text-base mt-[100px] hover:ml-[15px]  sm:hover:ml-[60px] self-end w-[130px] sm:w-[170px] pl-1 h-[27px] sm:h-[37px] rounded-lg text-center pt-1 border-2 border-gray-400
                        transition-all duration-300 overflow-hidden hover:w-[175px] sm:hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  Review & Acceptance – Support during peer review; receive a
                  Letter of Acceptance.
                </div>
              </motion.div>

              {/* Middle line */}
              <motion.div
                className="h-[340px] w-[6px] bg-gradient-to-b from-gray-400 to-gray-800 ml-3 sm:ml-10 rounded-2xl "
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: false, amount: 0.3 }}
              ></motion.div>

              {/* Right side */}
              <motion.div
                className="flex flex-col ml-3 sm:ml-10 mt-25"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div
                  className="sm:w-[220px] sm:h-[37px] w-[160px] h-[27px] text-xs sm:text-base hover:mb-[-48px] sm:hover:mb-[-23px] origin-left rounded-lg text-center pt-1 border-2 pl-1 border-gray-400 
                        transition-all duration-300 overflow-hidden hover:w-[170px] sm:hover:w-[500px] hover:h-[75px] sm:hover:h-[60px] bg-gray-400 text-black"
                >
                  <p>
                    Confirmation & Submission — Choose a journal; we assist with
                    submission and communication.
                  </p>
                </div>

                <div
                  className="w-[112px] sm:w-[140px] text-xs sm:text-base mt-[100px] origin-left h-[27px] sm:h-[38px] rounded-lg text-center pt-1 border-2 pl-2 border-gray-400 
                        transition-all duration-300 overflow-hidden hover:w-[170px] sm:hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  <p>
                    Final Publication — Your research is published in indexed
                    journals with DOI.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
