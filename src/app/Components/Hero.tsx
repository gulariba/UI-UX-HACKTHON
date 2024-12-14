import React from "react";
import Image from "next/image"; // Import Image from next/image

const Hero = () => {
  return (
    <section className="w-full h-auto bg-[#FBEBB5] flex flex-col md:flex-row items-center justify-center relative px-4 py-8">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left px-4 md:px-8 lg:px-12">
        {/* Subheading */}
        <h2 className="font-poppins font-medium text-[#000000] mb-4 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] leading-[36px] sm:leading-[48px] md:leading-[72px]">
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
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/Rocket.png"
          alt="Hero Image"
          className="object-contain rounded-lg"
          width={600}  // Set appropriate width
          height={600} // Set appropriate height
          layout="intrinsic" // Ensures aspect ratio is preserved while resizing
        />
      </div>
    </section>
  );
};

export default Hero;
