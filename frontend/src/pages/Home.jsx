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
        <div className="w-[1200px] mx-auto flex flex-col gap-5">
          <div className="text-center text-5xl font-bold">About Us</div>
          <div className="text-center text-xl">
            Accelerate your article Publication with us
          </div>
          <div className="flex flex-row gap-20 mt-5">
            <div className="w-[2300px] h-[500px] ">
              <img
                className="rounded-2xl shadow-2xl shadow-gray-700"
                src="https://media.istockphoto.com/id/1359589480/photo/man-working.jpg?s=612x612&w=0&k=20&c=zd1S1WtyJ6aIxpK53DK0hcEXehRWDQ4uUbYVzmwTpwA="
                alt=""
              />
            </div>
            <div className="text-lg">
              Bright Mind Publication is your trusted partner for scholarly
              success. We specialize in transforming your research into
              high-quality, publication-ready articles, guiding them into
              prestigious, indexed journals like SCOPUS, Web of Science, PubMed,
              and Google Scholar. We'll streamline the entire process, ensuring
              your work gets the quality and recognition it deserves.
              <Link to="/about">
              <div className="mt-16 w-30 h-11 pt-2 hover:w-31 hover:h-12 hover:shadow-lg hover:shadow-gray-700 hover:pt-3 hover:text-black hover:font-semibold hover:bg-gradient-to-br  hover:from-gray-700 hover:to-neutral-400 hover:cursor-pointer rounded-xl  text-center bg-black text-white">
                Know More
              </div></Link>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-gray-200 w-full mt-[-50px]">
          <div className="flex flex-col gap-5 py-10">
            <div className="text-center text-5xl font-bold">Our Services</div>
            <div className="text-center text-xl mb-[-55px]">
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

        <div className="w-full bg-[url('https://wallpapers.com/images/hd/black-and-white-book-1920-x-1080-wallpaper-004yikgbyrhdwl3w.jpg')] bg-cover bg-center bg-fixed relative">
          {/* Overlay to dim background */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content sits above overlay */}
          <div className="relative z-10 w-[1200px] mx-auto py-25 mb-[-40px] flex flex-col gap-5 text-white">
            <div className="text-center text-5xl font-bold">
              Publication Process
            </div>
            <div className="text-center text-xl text-gray-200">
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
                  className="self-end w-[150px] h-[38px] hover:mb-[-22px] rounded-lg text-center pt-1 border-2 pl-1 border-gray-400
                        transition-all duration-300 overflow-hidden hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  Journal Shortlisting – We suggest suitable, credible journals
                  for your review.
                </div>

                <div
                  className="ml-[390px] mt-[100px] hover:ml-[60px] self-end w-[170px] pl-1 h-[37px] rounded-lg text-center pt-1 border-2 border-gray-400
                        transition-all duration-300 overflow-hidden hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  Review & Acceptance – Support during peer review; receive a
                  Letter of Acceptance.
                </div>
              </motion.div>

              {/* Middle line */}
              <motion.div
                className="h-[340px] w-[6px] bg-gradient-to-b from-gray-400 to-gray-800 ml-10 rounded-2xl "
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: false, amount: 0.3 }}
              ></motion.div>

              {/* Right side */}
              <motion.div
                className="flex flex-col ml-10 mt-25"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div
                  className="w-[220px] h-[37px] hover:mb-[-23px] origin-left rounded-lg text-center pt-1 border-2 pl-1 border-gray-400 
                        transition-all duration-300 overflow-hidden hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
                >
                  <p>
                    Confirmation & Submission — Choose a journal; we assist with
                    submission and communication.
                  </p>
                </div>

                <div
                  className="w-[140px] mt-[100px] origin-left h-[38px] rounded-lg text-center pt-1 border-2 pl-2 border-gray-400 
                        transition-all duration-300 overflow-hidden hover:w-[500px] hover:h-[60px] bg-gray-400 text-black"
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
