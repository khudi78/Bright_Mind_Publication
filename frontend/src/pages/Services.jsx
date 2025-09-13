import React from "react";
import Headother from "../components/Headother";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Headother
        bgImage="https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D"
        title="Services"
        subtitle="How We Help You Achieve Your Publication Goals"
      />

      <div className="flex flex-col gap-15 mb-20 w-[350px] sm:w-[1020px] mx-auto mt-10 py-10">
        <div className="shadow-xl  shadow-gray-600 p-7 bg-gray-200 rounded-sm">
          <div className="text-xl font-semibold mb-5">Research Guidance</div>
          <div className="text-sm sm:text-base">
            We provide expert consultation to guide your research towards
            publication. Our team reviews your article and recommends the most
            suitable peer-reviewed journals. With personalized support, we help
            you navigate the publishing process and ensure global visibility in
            top research databases.  <Link to="/services/research-guidance"> <strong>Learn more...</strong></Link>
          </div>
        </div>
        <div  className="shadow-xl shadow-gray-600 p-7 bg-gray-200 rounded-sm">
          <div className="text-xl font-semibold mb-5">Research Publication</div>
          <div className="text-sm sm:text-base">
            Bright Mind Publication helps researchers publish in reputed,
            high-impact journals indexed in trusted databases. We ensure your
            work is accurately represented and reaches the right audience. Our
            expertise guarantees credibility, visibility, and successful
            placement in your target journal. <Link to="/services/research-publication"> <strong>Learn more...</strong></Link>
          </div>
        </div>
        <div  className="shadow-xl shadow-gray-600 p-7 bg-gray-200 rounded-sm">
          <div className="text-xl font-semibold mb-5">Manuscript, Thesis Writing & Editing</div>
          <div className="text-sm sm:text-base">
            We deliver comprehensive writing and editing support for manuscripts
            and theses. From idea development to final submission, our experts
            refine your work for clarity, accuracy, and impact. Every document
            is carefully polished to meet academic, institutional, and global
            publishing standards. <Link to="/services/manuscript-editing"> <strong>Learn more...</strong></Link>
          </div>
        </div>
        
      </div>
    </>
  );
}
