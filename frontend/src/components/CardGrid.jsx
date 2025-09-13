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
      className="relative w-80 h-70 sm:w-92 sm:h-84 [perspective:1000px]"
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
          className="absolute inset-0 flex mx-5 sm:mx-10 my-4 sm:my-8 text-white text-xl font-semibold"
          animate={{ x: rotate.y * 1.5, y: rotate.x * -1.5 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {title}:
        </motion.div>

        {/* Foreground Layer */}
        <motion.div
          className="absolute left-[20px] sm:left-[40px] top-14 sm:top-20 pr-5 sm:pr-10 text-balance text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {subtitle}
        </motion.div>
        <motion.div
          className="absolute left-[25px] sm:left-[40px] top-[180px] sm:top-[209px] pr-10 text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {p1}
        </motion.div>
        <motion.div
          className="absolute left-[25px] sm:left-[40px] top-[200px] sm:top-[229px] pr-10 text-white text-sm "
          animate={{ x: rotate.y * 3, y: rotate.x * -3 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          {p2}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function CardGrid() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 mx-auto mt-20">
       <ParallaxCard title="Research Guidance" p1="• Peer review by subject experts" p2="• Guidance for publishing in reputed journals" subtitle="Bright Mind Publication ensures your work reaches the right audience. We assist in publishing your research articles in high-impact journals indexed in trusted databases, providing the credibility your work deserves." />
      <ParallaxCard title="Manuscript & Thesis Support" p1="• End-to-end writing and editing support" p2="• Professional formatting and compliance checks" subtitle="From initial concept to final submission, our experts provide complete manuscript and thesis writing services. We craft polished, publication-ready documents that meet global academic and institutional standards." />
      <ParallaxCard title="Conference Paper Publication" p2="• Strategic guidance to improve acceptance chances" p1="• Timely publication in respected journals" subtitle="Maximize the impact of your conference papers with our tailored support. We offer expert reviews, formatting, and publication in reputed journals, boosting your acceptance rate and academic recognition." />
       </div>
  );
}
