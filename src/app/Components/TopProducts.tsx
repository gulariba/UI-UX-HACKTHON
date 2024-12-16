import Image from "next/image";

const TopProducts = () => {
  return (
    <div className="bg-[#FFFFFF] w-full py-10">
      {/* Heading Section */}
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl md:text-3xl text-[#000000] font-poppins font-medium">
          Top Picks For You
        </h1>
      </div>

      {/* Paragraph Section */}
      <div className="mx-auto w-[90%] md:w-[773px] text-center text-[#9F9F9F] text-sm md:text-base font-poppins font-medium leading-[24px] mb-8">
        <p>
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-10">
        {/* Product Card */}
        {[
          { src: "/sofa.png", title: "Trenton Modular Sofa_3 Fon", price: "25,000.00" },
          { src: "/dinningchair.png", title: "Dining Chair Set", price: "25,000.00" },
          { src: "/Mask.png", title: "Modern Lamp", price: "25,000.00" },
          { src: "/Mask2.png", title: "Desk Lamp", price: "25,000.00" },
        ].map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center"
          >
            <Image
              src={product.src}
              alt={product.title}
              width={287}
              height={372}
              className="object-cover rounded-lg"
            />
            <p className="text-[#000000] font-poppins font-normal text-sm md:text-base leading-[24px] mt-3">
              {product.title}
            </p>
            <p className="text-[#000000] font-poppins font-medium text-sm md:text-base leading-[24px]">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="w-[115px] h-[49px] text-[#000000] border-2 border-[#000000] text-center font-poppins text-sm md:text-base underline">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopProducts;
