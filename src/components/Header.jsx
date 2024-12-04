import React from "react";
import Logo from "../assets/image.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center shadow-xl sticky  top-0 bg-white z-10">
      <div className="w-[90%] flex justify-between items-center">
        <div className="logo w-28 p-2">
          <img src={Logo} />
        </div>

        <nav className="menu w-4/5 font-semibold flex justify-around items-center max-md:hidden">
            <a href="#" className="hover:text-[#c49326]">
                Home
            </a>

            <a href="#" className="hover:text-[#c49326]">
                About Us
            </a>

            <a href="#" className="hover:text-[#c49326]">
                Services
            </a>

            <a href="#" className="hover:text-[#c49326]">
                Gallery
            </a>

            <a href="#" className="hover:text-[#c49326]">
                Testimonials
            </a>

            <a href="#" className="hover:text-[#c49326]">
                Blog
            </a>

            <a href="#" className="hover:text-[#c49326]">
                FAQS
            </a>

            <a href="#" className="text-white bg-[#c49326] p-2 rounded-3xl hover:bg-[#d4a236]">
                Contact us
            </a>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
