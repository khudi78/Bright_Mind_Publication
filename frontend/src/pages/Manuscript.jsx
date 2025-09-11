import React from "react";
import Headother from "../components/Headother";
import CardService from "../components/CardService";
import SubHeader from "../components/SubHeader";

export default function Manuscript() {
  return (
    <>
      <SubHeader
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Manuscript , Thesis Writing & Editing "
        subtitle="Bright Mind Publication offers expert manuscript and thesis writing support for students, researchers, and academics across all fields. From concept to final submission, our team ensures your work meets the highest academic standards—clear, professional, and institution-ready."
        image="https://images.stockcake.com/public/e/b/e/ebedddb2-b72d-45d5-801c-72f210e77b5d_large/girl-reading-intently-stockcake.jpg"

      />

      <div className=" w-full mb-15">
        <div className="flex flex-col gap-5 py-15">
            <CardService  />
          <div className="max-w-5xl mt-15  mx-auto bg-gray-200 shadow-lg shadow-gray-600 p-10">
            <div className="text-2xl font-semibold mb-2">Comprehensive Academic Writing Services </div>
            <div className="mb-4">Support for students and
            researchers at every stage—from thesis and dissertation to articles
            and research proposals.</div>
            <div className="mb-4">
            <ul>
               <li >
                <div className="text-lg font-semibold mb-1">Thesis & Dissertation Support Expert :</div>
                <div className="mb-5">Expert guidance to craft well-structured theses and dissertations with rigorous methodology, clear arguments, and institutional compliance.</div>
               </li>
            <li>
               <div className="text-lg font-semibold mb-1">Synopsis & Proposal Writing :</div>
               <div className="mb-5">Concise, compelling synopses that clearly present your research objectives and methodology for approval or funding.</div>
            </li>
            <li>
               <div className="text-lg font-semibold mb-1">Article & Journal Writing :</div>
               <div className="mb-5">Professional writing for original research or review articles, tailored for clarity, depth, and journal submission standards.</div>
            </li>
            </ul>
            </div>
            <div>
                <div className="text-lg mb-2">Why Choose Us</div>
                <div className="mb-6">
                    <ul className="list-disc flex flex-col gap-1 ml-5">
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
