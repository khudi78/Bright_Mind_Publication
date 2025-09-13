import React from "react";
import Headother from "../components/Headother";
import CardService from "../components/CardService";
import SubHeader from "../components/SubHeader";

export default function Manuscript() {
  return (
    <>
      <SubHeader
        bgImage="https://www.zibelinepub.com/wp-content/uploads/2018/01/book.jpg"
        title="Manuscript , Thesis Writing & Editing "
        subtitle="Bright Mind Publication offers expert manuscript and thesis writing support for students, researchers, and academics across all fields. From concept to final submission, our team ensures your work meets the highest academic standards—clear, professional, and institution-ready."
        image="https://media.istockphoto.com/id/508586144/photo/reading-book.jpg?s=612x612&w=0&k=20&c=OsmoANlXNS89ocHMQtbHYAj1EUTdyJ6GqMJpFmOtL8w="

      />

      <div className=" w-full mb-15">
        <div className="flex flex-col gap-5 mt-[-30px] sm:mt-[-60px] sm:py-15">
            <CardService  />
          <div className="w-[370px] sm:w-[1000px] mt-10 sm:mt-15 mx-auto bg-gray-200 shadow-lg shadow-gray-600 px-3 py-5 sm:p-10">
            <div className="text-xl sm:text-2xl font-semibold mb-2">Comprehensive Academic Writing Services </div>
            <div className="mb-4 text-sm sm:text-base">Support for students and
            researchers at every stage—from thesis and dissertation to articles
            and research proposals.</div>
            <div className="mb-4">
            <ul>
               <li >
                <div className="text-base sm:text-lg font-semibold mb-1">Thesis & Dissertation Support Expert :</div>
                <div className="mb-5 text-sm sm:text-base">Expert guidance to craft well-structured theses and dissertations with rigorous methodology, clear arguments, and institutional compliance.</div>
               </li>
            <li>
               <div className="text-base sm:text-lg font-semibold mb-1">Synopsis & Proposal Writing :</div>
               <div className="mb-5 text-sm sm:text-base">Concise, compelling synopses that clearly present your research objectives and methodology for approval or funding.</div>
            </li>
            <li>
               <div className="text-base sm:text-lg font-semibold mb-1">Article & Journal Writing :</div>
               <div className="mb-5 text-sm sm:text-base">Professional writing for original research or review articles, tailored for clarity, depth, and journal submission standards.</div>
            </li>
            </ul>
            </div>
            <div>
                <div className="text-base sm:text-lg mb-2">Why Choose Us</div>
                <div className="mb-6">
                    <ul className="list-disc flex flex-col text-sm sm:text-base gap-1 ml-5">
                        <li>Subject matter expertise across disciplines</li>
                        <li>Literature review, methodology, and data analysis support</li>
                        <li>Structured, polished, and publication-ready documents</li>
                        <li>Personalized guidance to balance research and deadlines</li>
                    </ul>
                </div>
            </div>
             
            
          </div>

          
        </div>
      </div>
    </>
  );
}
