import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] py-12 px-6">
      <div className="text-center max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Address Section */}
        <div className="text-[#9F9F9F] space-y-4">
          <p className="text-base">
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="text-[#000000] space-y-4">
          <h3 className="text-xl font-extrabold mt-6">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-[#000000] space-y-4">
          <h3 className="text-xl font-extrabold mt-6">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="text-base text-[#000000] hover:text-[#E4405F]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-[#000000] space-y-4">
          <h3 className="text-xl font-extrabold mt-6">Newsletter</h3>
          <div className="mb-4">
            <div className="w-full border-b-2 border-[#E0E0E0]">
              <input
                type="email"
                className="w-full p-3 bg-white border-0 outline-none"
                placeholder="Your email"
              />
            </div>
            <button className="w-full mt-2 py-3 text-[#000000] underline underline-offset-2 rounded-lg hover:bg-[#D62C4F]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t-2 border-[#E0E0E0]"></div>

      {/* Footer Bottom Section */}
      <div className="text-left text-[#000000]">
        <p className="text-base">
          2022 Meubal House. Rights Reserved © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
