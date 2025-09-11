import React from "react";
import Headother from "../components/Headother";

export default function About() {
  return (
    <>
      <Headother
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="About Us"
        subtitle="

Bright Mind Publication is your trusted partner for scholarly success. We put your research first."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-10 mt-10 py-10">
        <div>
          {" "}
          Bright Mind Publication, we put your research first. Your article gets
          top- priority review from our expert editors and peers across all
          fields, including engineering, medicine, law, business, and more. We
          provide seamless access to our vast network of research database
          journals, including SCOPUS, Web of Science, Google Scholar, PubMed,
          and ABDC, ensuring your work is seen by the right audience. As a
          leading publishing authority, we offer DOI indexing, boosting your
          article's visibility and impact. We're proud to have served 10,000+
          satisfied clients in 180+ countries, a testament to our commitment to
          client satisfaction, rapid publication, and credibility. Whether
          you're a Ph.D. scholar, professor, or a company researcher, we are
          dedicated to helping you select the perfect journal and resolve any
          publication challenges.
        </div>
        <div>
          Your top priority is your success. We understand your research and
          help you find the perfect journal fit from our list of indexed
          publications. We offer complete access to our citation and reference
          databases, ensuring you have the resources you need. We are proud to
          serve a wide range of clients, from university faculty to corporate
          researchers, with a commitment to rapid service, credibility, and
          exceptional client support.
        </div>
      </div>

      <div className="flex flex-row gap-20  p-10 w-[1120px] mx-auto mb-20">
        <div className="border-shadow-lg shadow-2xl w-[500px] p-3 bg-gray-200">
            <div className="text-3xl font-semibold mb-2">Vision</div>
            <div>To be the most trusted global partner in academic publishing by empowering researchers, scholars, and institutions to share their knowledge with integrity, visibility, and impact across the world.</div>
        </div>
        <div className="border-shadow-lg shadow-2xl w-[500px] h-[200px] p-3 bg-gray-200">
            <div className="text-3xl font-semibold mb-2">Mission</div>
            <div>To provide complete research publication support — from writing and editing to journal selection and final publication — ensuring quality, ethics, and credibility.

                  To empower researchers by connecting their work with reputed, indexed journals, maximizing visibility, recognition, and global impact.</div>
        </div>  
      </div>
    </>
  );
}
