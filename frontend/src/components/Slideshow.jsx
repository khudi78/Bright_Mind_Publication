import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1756926650683-27b0863be328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    text: "Welcome to APAPUB – Your trusted partner in publishing",
  },
  {
    img: "https://picsum.photos/1200/500?random=2",
    text: "Explore our wide range of services tailored for you",
  },
  {
    img: "https://picsum.photos/1200/500?random=3",
    text: "Innovating ideas and delivering excellence",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full  mx-auto h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with overlay */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              {/* Text on top */}
              <h2 className="text-3xl md:text-5xl font-bold text-white px-4 text-center">
                {slide.text}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
