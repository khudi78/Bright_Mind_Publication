import React from "react";
import Headother from "../components/Headother";

export default function About() {
  return (
    <>
      <Headother
        bgImage="https://images.unsplash.com/photo-1614332625575-6bef549fcc7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVibGljYXRpb258ZW58MHx8MHx8fDA%3D"
        title="About Us"
        subtitle="

Bright Mind Publication is your trusted partner for scholarly success. We put your research first."
      />
      <div className="mx-5 sm:max-w-5xl sm:mx-auto flex flex-col gap-7 sm:gap-10 mt-5 sm:mt-10 py-10">
        <div>
          {" "}
          Bright Mind Publication, we put your research first. Your article gets
          top- priority review from our expert editors and peers across all
          fields, including engineering, medicine, law, business, and more. We
          provide seamless access to our vast network of research database
          journals, including<strong> SCOPUS, Web of Science, Google Scholar, PubMed,
          and ABDC</strong>, ensuring your work is seen by the right audience. As a
          leading publishing authority, we offer DOI indexing, boosting your
          article's visibility and impact. We're proud to have served 10,000+
          satisfied clients in 180+ countries, a testament to our commitment to
          client satisfaction, rapid publication, and credibility. Whether
          you're a Ph.D. scholar, professor, or a company researcher, we are
          dedicated to helping you select the perfect journal and resolve any
          publication challenges.
        </div>
        <div>
          Our top priority is your success. We understand your research and
          help you find the perfect journal fit from our list of indexed
          publications. We offer complete access to our citation and reference
          databases, ensuring you have the resources you need. We are proud to
          serve a wide range of clients, from university faculty to corporate
          researchers, with a commitment to rapid service, credibility, and
          exceptional client support.
        </div>
      </div>

      <div className="flex flex-col ml-[-15px] sm:flex-row gap-15 sm:gap-20  p-10  sm:w-[1120px] sm:mx-auto mb-10 sm:mb-20">
        <div className="border-shadow-lg shadow-2xl w-[360px] sm:w-[500px] p-3 bg-gray-200">
            <div className="text-xl sm:text-3xl font-semibold mb-2">Vision</div>
            <div className="text-sm sm:text-base">To be the most trusted global partner in academic publishing by empowering researchers, scholars, and institutions to share their knowledge with integrity, visibility, and impact across the world.</div>
        </div>
        <div className="border-shadow-lg shadow-2xl w-[360px] sm:w-[500px] h-[200px] p-3 bg-gray-200">
            <div className="text-xl sm:text-3xl font-semibold mb-2">Mission</div>
            <div className="text-sm sm:text-base">To provide complete research publication support — from writing and editing to journal selection and final publication — ensuring quality, ethics, and credibility.

                  To empower researchers by connecting their work with reputed, indexed journals, maximizing visibility, recognition, and global impact.</div>
        </div>  
      </div>
    </>
  );
}
