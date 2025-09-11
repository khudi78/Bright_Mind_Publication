import { motion } from "framer-motion";
import { useState } from "react";

function ParallaxCard({ title, p1, p2, subtitle }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * 20; // tilt up/down
    const rotateY = ((x / width) - 0.5) * -20; // tilt left/right

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      className="relative w-92 h-84 [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotate}
    >
      <motion.div
        className="absolute inset-0 rounded-xl shadow-2xl overflow-hidden"
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-neutral-500 "></div>

        {/* Mid Layer */}
        <motion.div
          className="absolute inset-0 flex  mx-10 my-8 text-white text-xl font-semibold"
          animate={{ x: rotate.y * 1.5, y: rotate.x * -1.5 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {title}:
        </motion.div>

        {/* Foreground Layer */}
        <motion.div
          className="absolute left-[40px] top-20 pr-10 text-balance text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {subtitle}
        </motion.div>
        <motion.div
          className="absolute left-[40px] top-[209px] pr-10 text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {p1}
        </motion.div>
        <motion.div
          className="absolute left-[40px] top-[229px] pr-10 text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {p2}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function CardService() {
  return (
    <div className="flex flex-row gap-10 mx-auto mt-20">
     
      <ParallaxCard title="Thesis Writing Support" p1="• Topic selection and research design" p2="• Structured writing and formatting" subtitle="Craft a standout thesis with guidance from our expert writers. From research design to final formatting, we help graduate and postgraduate students produce well-structured, submission-ready documents." />
      <ParallaxCard title="Dissertation Assistance" p1="• Research methodology development" p2="• Drafting, editing, and proofreading" subtitle="Achieve excellence in your doctoral research. We provide end-to-end support—from proposal development to final submission—ensuring your dissertation meets the highest academic standards." />
      <ParallaxCard title="Article & Review Writing" p2="• Literature and systematic reviews that synthesize existing research" p1="•  Peer-reviewed journal submissions" subtitle="Tailored article writing solutions for journal publication, including original research articles and review papers. We ensure clarity, depth, and scholarly rigor in every submission." />

    </div>
  );
}
