import Image from "next/image";

const BlogSection = () => {
  // Get current date and time
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString(); // Time first
  const formattedDate = currentDate.toLocaleDateString(); // Date second

  return (
    <div className="w-full py-12 bg-[#FFFFFF]">
      {/* Blog Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-[#000000] leading-[54px] mb-4">
          Our Blogs
        </h2>
        <p className="text-base sm:text-lg font-poppins text-[#9F9F9F]">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Posts Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {/* Blog Post 1 */}
        <div className="w-full max-w-xs h-[555px] bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/rectangle1.png" // Replace with your image path
            alt="Blog Post 1"
            width={393}
            height={393}
            className="object-cover w-full h-64"
          />
          <div className="p-6">
            <p className="text-base sm:text-lg font-poppins text-[#000000] mb-4">
              Going all-in with millennial design
            </p>
            <button className="underline text-[#000000] text-base sm:text-lg font-poppins block mx-auto mb-4">
              Read More
            </button>
            {/* Time and Date */}
            <p className="text-sm font-poppins text-[#9F9F9F] mt-2 text-center font-extrabold">
              {formattedTime} - {formattedDate}
            </p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="w-full max-w-xs h-[555px] bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/rectangle2.png" // Replace with your image path
            alt="Blog Post 2"
            width={393}
            height={393}
            className="object-cover w-full h-64"
          />
          <div className="p-6">
            <p className="text-base sm:text-lg font-poppins text-[#000000] mb-4">
              Going all-in with millennial design
            </p>
            <button className="underline text-[#000000] text-base sm:text-lg font-poppins block mx-auto mb-4">
              Read More
            </button>
            {/* Time and Date */}
            <p className="text-sm font-poppins text-[#9F9F9F] mt-2 text-center font-extrabold">
              {formattedTime} - {formattedDate}
            </p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="w-full max-w-xs h-[555px] bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/rectangle3.png" // Replace with your image path
            alt="Blog Post 3"
            width={393}
            height={393}
            className="object-cover w-full h-64"
          />
          <div className="p-6">
            <p className="text-base sm:text-lg font-poppins text-[#000000] mb-4">
              Going all-in with millennial design
            </p>
            <button className="underline text-[#000000] text-base sm:text-lg font-poppins block mx-auto mb-4">
              Read More
            </button>
            {/* Time and Date */}
            <p className="text-sm font-poppins text-[#9F9F9F] mt-2 text-center font-extrabold">
              {formattedTime} - {formattedDate}
            </p>
          </div>
        </div>
      </div>

      {/* All Posts Button */}
      <div className="text-center mt-6">
        <button className="underline underline-offset-8 text-[#000000] text-xl font-poppins">
          View All Post
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
