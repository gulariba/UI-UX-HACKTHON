import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] py-24 px-16">
      <div className="text-center max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {/* Address Section */}
        <div className="text-[#9F9F9F] space-y-8">
          <p className="text-lg md:text-xl leading-relaxed">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="text-[#000000] space-y-8">
          <h3 className="text-2xl font-bold">Links</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-[#000000] space-y-8">
          <h3 className="text-2xl font-bold">Help</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="text-lg md:text-xl hover:text-[#E4405F]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-[#000000] space-y-8">
          <h3 className="text-2xl font-bold">Newsletter</h3>
          <div className="mb-4">
            <div className="w-full border-b-4 border-[#000000]">
              <input
                type="email"
                className="w-full p-4 bg-white border-0 outline-none focus:border-[#000000] focus:ring-0 placeholder-gray-400"
                placeholder="Your email"
              />
            </div>
            <button className="w-full mt-6 py-4 text-lg text-[#000000] underline underline-offset-4 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 border-t-4 border-[#E0E0E0]"></div>

      {/* Footer Bottom Section */}
      <div className="text-left text-[#000000]">
        <p className="text-lg md:text-xl">
          2022 Meubal House. Rights Reserved © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
