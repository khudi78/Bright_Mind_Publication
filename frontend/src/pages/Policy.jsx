import React from "react";
import Headother from "../components/Headother";
export default function Policy() {
  return (
    <div>
      <Headother
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Policies"
        subtitle="Clear Policies, Strong Trust. 🤝 Guidelines That Protect, Principles That Empower."
      />

      <div className="max-w-5xl px-20 mb-20  mx-auto flex flex-col gap-5  mt-15 py-10 bg-gray-200 shadow-lg shadow-gray-600 p-10 ">
       <div> <div className="text-lg font-semibold"> Privacy Policy</div>
        <div>
          We're committed to your privacy. This policy details how we collect
          and use your personal information, such as your name and email, which
          we gather during manuscript submission or communication. We only use
          this data to process your work, answer your questions, and enhance
          your user experience. We do not sell or share your personal data with
          third parties, except with trusted partners involved in the publishing
          process under strict confidentiality or when required by law. All
          personal data is stored securely, and we implement appropriate
          measures to prevent unauthorized access or misuse. Users have the
          right to access, correct, or request deletion of their information at
          any time.
        </div></div>
        <div> <div className="text-lg font-semibold">Publication Ethics </div>
        <div>
          Bright Mind Publication, we are committed to maintaining the highest
          standards of publication ethics to safeguard the integrity, quality,
          and credibility of our work. Authors must submit only original
          manuscripts, ensure accurate citations, and avoid plagiarism, data
          fabrication, falsification, or duplicate submissions.
        </div></div>
        <div> <div className="text-lg font-semibold">Refund & Cancellation Policy </div>
        <div>
          A good Refund & Cancellation Policy should be clear, concise, and fair
          to both the business and the customer. It should be easily accessible
          on your website and written in simple, easy-to-understand language.
        </div>{" "}</div>
      </div>
    </div>
  );
}
