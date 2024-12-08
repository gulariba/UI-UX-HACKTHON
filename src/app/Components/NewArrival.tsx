import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="w-full h-auto sm:h-[639px] flex flex-col sm:flex-row items-center justify-between bg-[#FFF9E5] px-4 sm:px-[50px] py-8 sm:py-0">
      {/* Left Side - Product Image */}
      <div className="w-full sm:w-[60%] mb-6 sm:mb-0">
        <Image
          src="/Asgaardsofa1.png" // Replace with your product image path
          alt="New Product"
          width={983} // Adjust as per your requirement
          height={799} // Adjust as per your requirement
          className="object-cover w-full h-auto sm:h-full"
        />
      </div>

      {/* Right Side - Content and Order Button */}
      <div className="w-full sm:w-[35%] flex flex-col items-center justify-center sm:items-start sm:text-left">
        <h2 className="text-xl sm:text-2xl text-[#000000] font-poppins font-light leading-[36px] mb-4 sm:mb-6 text-center sm:text-left">
          New Arrivals
        </h2>

        {/* New Product Name as Heading - Centered */}
        <h1 className="text-[#000000] text-center sm:text-left font-poppins font-black text-3xl sm:text-[48px] leading-[44px] mb-6">
          Asgaard Sofa
        </h1>

        {/* Order Now Button with Border and Padding */}
        <button className="w-[250px] sm:w-[300px] h-[70px] border-2 border-[#000000] py-[15px] px-[20px] text-[#000000] text-lg sm:text-[20px] font-poppins font-medium leading-[24px] hover:bg-[#333333] transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
