import React from "react";
import imgServicios from "../assets/image3.png";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col p-3 pb-20 bg-[#dfdcd7]">
      <div className="w-2/3 max-sm:w-full flex justify-center items-center flex-col">
        <div className="imgServices">
          <img className="w-32" src={imgServicios} />
        </div>
        <h3 className="text-center font-extralight text-6xl font-serif">
          Testimonials
        </h3>
        <p className="text-center text-xl font-light mt-2">
          Don't just take our word for it-hear from our satisfied clients! We
          take pride in the strong relationships we've built with our clients,
          and their feedback speals to our commitment to excelence.
        </p>
      </div>

      <div className="w-full max-md:flex-col max-lg:flex-col flex items-center mt-14 justify-center">
      
        <div className="flex max-sm:w-full items-center">
          <div className="w-80 bg-white p-4 rounded-3xl">
            <div className="w-48">
            <h4 className="text-3xl font-serif">Laura Chen</h4>
            <p className="mt-2">The attention to detail and professionalism exceeded our expectations.Highly recommend!</p>
            </div>

            <div className="flex w-36 justify-between items-center mt-4">
            <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
            </div>
          </div>

          <div className="flex w-60 h-40 relative right-24 max-sm:right-2 bg-[url('./assets/perfil1.jpg')] bg-cover rounded-3xl justify-center items-center">
            <FaPlayCircle className="text-5xl text-[#68b6be] bg-white rounded-full opacity-75 border-2"/>
          </div>
        </div>

        <div className="flex max-sm:w-full items-center justify-evenly max-md:mt-5 max-lg:mt-5">
          <div className="w-80 bg-white p-4 rounded-3xl">
            <div className="w-48">
            <h4 className="text-3xl font-serif">Laura Chen</h4>
            <p className="mt-2">The attention to detail and professionalism exceeded our expectations.Highly recommend!</p>
            </div>

            <div className="flex w-36 justify-between items-center mt-4">
            <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
          <FaStar className="text-[#68b6be] text-xl"/>
            </div>
          </div>

          <div className="w-60 h-40 max-sm:right-2 relative right-24 bg-[url('./assets/perfil2.jpg')] bg-cover rounded-3xl flex justify-center items-center">
            <FaPlayCircle className="text-5xl text-[#68b6be] bg-white rounded-full opacity-75 border-2"/>
          </div>
        </div>

        
      </div>
      <div className="w-full flex justify-center items-center mt-20 mb-5 ">
      <div className="w-[20%] max-md:w-[40%] flex justify-center items-center ">
        <button className="w-full max-sm:w-full p-3 rounded-3xl bg-[#68b6be] text-white font-semibold">Explores More Testimonilas</button>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
