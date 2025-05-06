import React from "react";

const Hero = ({ image, title }) => (
  <section className="w-full py-10 px-0 bg-white">
    <div
      className="w-full relative flex items-center justify-center mb-0"
      style={{ minHeight: "280px" }}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 bg-gray-800 opacity-70"
        style={{ zIndex: 1 }}
      ></div>
      <h1 className="text-5xl font-bold text-white relative z-10 text-center">
        {title}
      </h1>
    </div>
  </section>
);

export default Hero;