import React from "react";
import imgServicios from "../assets/image3.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactoUs = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col  pb-20 bg-[url('./assets/icon-img.jpg')] bg-cover">
        <div className="w-full bg-[#00000091]">
          <div className="flex justify-center items-center flex-col">
            <div className="imgServices p-3">
              <img className="w-32" src={imgServicios} />
            </div>
            <h3 className="text-center font-extralight text-6xl font-serif text-white">
              Contact Us
            </h3>
          </div>

          <div className="w-full h-full flex items-center mt-14 p-5 justify-center bg-[#e0e0e0]">
            <div className="flex justify-evenly max-md:flex-col items-center mt-5">
              <div className="w-1/3 max-md:w-full max-md:mt-5 infoContact p-3 flex items-start flex-col">
                <div className="w-full">
                  <h3 className="font-serif text-4xl text-zinc-800">
                    Ready to
                  </h3>
                  <h4 className="font-serif text-[#68b6be] text-5xl">
                    Get Started?
                  </h4>
                </div>

                <p className="mt-8">
                  Whether you're planning a stunning outdoor retreat, or a major
                  Constructionproject, Vintage Outdoor Inc, and Vintage
                  Construction Inc, are here to help
                </p>

                <p className="mt-5">
                  Get in touch with us today to discuss your proyect request a
                  quote. or shedule a consultation.
                </p>

                <div className="w-full mt-7 flex  items-center">
                  <FaPhoneAlt className="mr-4 text-2xl text-[#68b6be]" />{" "}
                  <p className="text-xl font-semibold">760 350 5552</p>
                </div>

                <div className="w-full mt-8 flex  items-center">
                  <FaLocationDot className="mr-4 text-2xl text-[#68b6be]" />{" "}
                  <p className="text-xl font-medium">760 350 5552</p>
                </div>
              </div>

              <div className="contactFor w-[40%] max-md:w-full max-md:mt-5 bg-white rounded-lg p-7">
                <div>
                  <h2 className="text-xl font-semibold">Send a Message</h2>
                </div>

                <div className="w-full mt-5 p-3  text-slate-800">
                  <input
                    className="w-full p-2 outline-0 border-b-2"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="w-full mt-5 p-3  text-slate-800">
                  <input
                    className="w-full p-2 outline-0 border-b-2"
                    type="text"
                    placeholder="E-mail address "
                  />
                </div>

                <div className="w-full mt-5 p-3  text-slate-800">
                  <input
                    className="w-full p-2 outline-0 border-b-2"
                    type="text"
                    placeholder="Message "
                  />
                </div>

                <div className="w-full flex items-center justify-center mt-5 p-3 ">
                  <div className="flex justify-center">
                    <button className="w-28 rounded-lg p-2 bg-[#68b6be] font-semibold">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-12 relative bottom-18 bg-[#c49326]"></div>
    </>
  );
};

export default ContactoUs;
