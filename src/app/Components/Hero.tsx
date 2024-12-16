import React from "react";
import Image from "next/image"; // Import Image from next/image

const Hero = () => {
  return (
    <section className="w-full h-auto bg-[#FBEBB5] flex flex-col md:flex-row items-center justify-center relative px-6 md:px-12 py-10 md:py-16">
      {/* Left Side Content */}
      <div className="flex-[1.2] flex flex-col justify-center md:items-start items-center text-center md:text-left px-6 lg:px-14">
        {/* Subheading */}
        <h2 className="font-poppins font-medium text-[#000000] mb-6 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-tight sm:leading-tight md:leading-[64px] lg:leading-[84px]">
          Rocket Single Seater
        </h2>
        <a
          href="#"
          className="text-base sm:text-lg md:text-xl text-[#000000] border-b-2 border-[#000000] inline-block hover:text-gray-600"
        >
          Shop Now
        </a>
      </div>

      {/* Right Side Image */}
      <div className="flex-[1.5] flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/Rocket.png"
          alt="Hero Image"
          className="object-contain rounded-lg"
          width={800} // Increased width
          height={800} // Increased height
          layout="intrinsic" // Ensures aspect ratio is preserved while resizing
          priority // Preloads the image for better performance
        />
      </div>
    </section>
  );
};

export default Hero;
