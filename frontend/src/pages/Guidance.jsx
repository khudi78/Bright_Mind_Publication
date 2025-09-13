import React from "react";
import Headother from "../components/Headother";
import SubHeader from "../components/SubHeader";

export default function Guidance() {
  return (
    <div>
      <>
        <SubHeader
          bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          title="Research Guidance"
          subtitle="Our publication support services provide end-to-end assistance—from meticulous editing, formatting, and plagiarism checks to journal selection and submission. We help you target top-indexed journals like Scopus, Web of Science, and PubMed, boosting your chances of acceptance. With personalized guidance, timely updates, and ethical practices, we make your publication journey smooth, transparent, and impactful."
                image="https://images.stockcake.com/public/e/b/e/ebedddb2-b72d-45d5-801c-72f210e77b5d_large/girl-reading-intently-stockcake.jpg"

        />

        <div className="w-[370px] sm:w-[1000px] sm:pl-20 mb-20  mx-auto flex flex-col gap-4 sm:gap-5  mt-15 py-5 sm:py-10 bg-gray-200 shadow-lg shadow-gray-600 px-3 sm:p-10 ">
          
           <div className="text-xl sm:text-2xl font-bold"> Our Research Guidance Solutions</div>
            <div className="text-sm sm:text-base"> Empowering your journey from manuscript to publication with expert guidance.</div>
            <div>
                <ul className="list-disc flex flex-col gap-5 sm:gap-5 ml-5">
                    <li> <h1 className="text-base sm:text-lg font-semibold"> Strategic Journal Guidance</h1>
                        <ul className="text-sm sm:text-base ml-2 sm:ml-5">
                            <li>Journal Selection & Recommendation → Tailored Journal</li>
                            <li>Matching Impact Factor & Scope Analysis → Choose the Right Platform for Your Research</li>
                        </ul>
                    </li>
                    <li> <h1 className="text-base sm:text-lg font-semibold"> Manuscript Excellence</h1>
                        <ul className="text-sm sm:text-base ml-2 sm:ml-5">
                            <li>Formatting & Editing → Polished Manuscripts, Ready to Submit</li>
                            <li>Language Refinement & Proofreading → Clarity, Precision, and Professionalism</li>
                        </ul>
                    </li>
                    <li> <h1 className="text-base sm:text-lg font-semibold"> Ethical & Compliance Support</h1>
                        <ul className="text-sm sm:text-base ml-2 sm:ml-5">
                            <li>Plagiarism Check & Reduction → Ensure Originality and Credibility</li>
                            <li>Publication Ethics Guidance → Navigate Ethical Standards with Confidence</li>
                        </ul>
                    </li>
                    <li> <h1 className="text-base sm:text-lg font-semibold"> Submission & Communication Assistance</h1>
                        <ul className="text-sm sm:text-base ml-2 sm:ml-5">
                            <li>Cover Letter Preparation → Compelling Letters that Impress Editors</li>
                            <li>Response to Reviewers → Professional Replies to Peer Review Feedback</li>
                        </ul>
                    </li>
                    <li> <h1 className="text-base sm:text-lg font-semibold"> Open Access & Citation Enhancement</h1>
                        <ul className="text-sm sm:text-base ml-2 sm:ml-5">
                            <li>Open Access Publication Support → Maximize Visibility of Your Research</li>
                            <li>Citation Improvement & Reference Management → Boost Reach and Recognition</li>
                        </ul>
                    </li>
                </ul>
            </div>
          </div>
       
      </>
    </div>
  );
}

            
