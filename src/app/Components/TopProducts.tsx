import Image from "next/image";

const TopProducts = () => {
  return (
    <div className="relative bg-[#FFFFFF] w-full h-[777px]">
      {/* Heading Section */}
      <div className="absolute top-[50px] w-full flex justify-center">
        <h1 className="text-3xl text-[#000000] font-poppins font-medium leading-[54px]">
          Top Picks For You
        </h1>
      </div>

      {/* Paragraph Section */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[773px] text-[#9F9F9F] text-[16px] text-center font-poppins font-medium leading-[24px]">
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Images and Product Info Section */}
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-[50px]">
        {/* First Product */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/sofa.png"
            alt="Product Image 1"
            width={287}
            height={372}
            className="object-cover"
          />
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] mt-3 text-center">
            Trenton Modular Sofa_3 Fon
          </p>
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] text-center">
            25,000,00
          </p>
        </div>

        {/* Second Product */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/dinningchair.png"
            alt="Product Image 2"
            width={287}
            height={372}
            className="object-cover"
          />
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] mt-3 text-center">
            Dining Chair Set
          </p>
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] text-center">
            25,000,00
          </p>
        </div>

        {/* Third Product */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/Mask.png"
            alt="Product Image 3"
            width={287}
            height={372}
            className="object-cover"
          />
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] mt-3 text-center">
            Modern Lamp
          </p>
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] text-center">
            25,000,00
          </p>
        </div>

        {/* Fourth Product */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/Mask2.png"
            alt="Product Image 4"
            width={287}
            height={372}
            className="object-cover"
          />
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] mt-3 text-center">
            Desk Lamp
          </p>
          <p className="text-[#000000] font-poppins font-normal text-[16px] leading-[24px] w-[194px] h-[24px] text-center">
            25,000,00
          </p>
        </div>
      </div>

      {/* Centered View More Button */}
      <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2">
        <button className="w-[115px] h-[49px] text-[#000000] border-2 border-[#000000] text-center font-poppins text-[16px] leading-[24px] underline">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopProducts;
