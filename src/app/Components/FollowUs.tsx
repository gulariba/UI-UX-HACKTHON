import Image from "next/image";

const FollowUs = () => {
  return (
    <div
      className="w-full h-[450px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/bgimage.png')", // Replace with your image path
        backgroundSize: "100% 50%", // Cover 50% of the height
      }}
    >
      {/* Light overlay for text visibility */}
      <div className="absolute inset-5 bg-[#FAF4F4] opacity-60"></div> {/* Light overlay */}

      <div className="relative z-10 text-center text-[#000000] px-6 py-12">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-poppins font-extrabold leading-tight mb-6">
          Our Instagram
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl font-poppins mb-6">
          Follow our store on Instagram
        </p>

        {/* Follow Us Button */}
        <button className="text-lg sm:text-xl font-poppins font-extrabold py-4 px-10 rounded-3xl border-2 border-white shadow-xl transform hover:scale-105 transition duration-300">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
