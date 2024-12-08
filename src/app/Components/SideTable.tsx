import React from 'react';
import Image from 'next/image'; // Importing Image from next/image

const SideTable = () => {
  return (
    <section className="w-full bg-[#FAF4F4] flex flex-col items-center py-8">
      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 px-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[90%] md:w-[605px] lg:w-[500px] xl:w-[605px] h-auto flex flex-col items-center bg-[#FAF4F4] shadow-lg rounded-lg">
          {/* Image */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-[#FAF4F4]">
            <Image
              src="/sidetable1.png"
              alt="Side Table 1"
              className="w-full h-full object-contain"
              width={500}  // Set appropriate width
              height={400} // Set appropriate height
              layout="responsive" // Optional for responsiveness
            />
          </div>

          {/* Card Content */}
          <div className="flex flex-col items-center p-4">
            {/* Card Name */}
            <h3 className="text-[20px] sm:text-[24px] md:text-[36px] font-medium text-[#000000] font-poppins text-center">
              Side Table 1
            </h3>

            {/* View More Button */}
            <a
              href="#"
              className="mt-2 text-sm sm:text-base md:text-lg text-[#000000] font-medium border-b-2 border-[#000000] pb-1 hover:text-gray-600"
            >
              View More
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[90%] md:w-[605px] lg:w-[500px] xl:w-[605px] h-auto flex flex-col items-center bg-[#FAF4F4] shadow-lg rounded-lg">
          {/* Image */}
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-[#FAF4F4]">
            <Image
              src="/sidetable2.png"
              alt="Side Table 2"
              className="w-full h-full object-contain"
              width={500}  // Set appropriate width
              height={400} // Set appropriate height
              layout="responsive" // Optional for responsiveness
            />
          </div>

          {/* Card Content */}
          <div className="flex flex-col items-center p-4">
            {/* Card Name */}
            <h3 className="text-[20px] sm:text-[24px] md:text-[36px] font-medium text-[#000000] font-poppins text-center">
              Side Table 2
            </h3>

            {/* View More Button */}
            <a
              href="#"
              className="mt-2 text-sm sm:text-base md:text-lg text-[#000000] font-medium border-b-2 border-[#000000] pb-1 hover:text-gray-600"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideTable;
