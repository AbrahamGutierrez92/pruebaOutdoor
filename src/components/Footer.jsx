import React from 'react'
import imgServicios from "../assets/image3.png"
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <>
    <div className="w-full h-[80%] bg-[url('./assets/img3.jpg')] bg-cover  bg-center bg-no-repeat">
        <div className="w-full h-full  bg-[#000000b0] p-4">
          <div className="w-5/6 max-md:flex-col flex m-auto justify-center items-center">
           
           <div className='flex max-md:w-full w-1/4 flex-col items-center'>
            <div className="w-32">
                <img src={imgServicios}/>
            </div>

            <div className="mt-9 max-sm:w-full">
                <p className='text-white max-sm:text-center'>At Vintage Outdoor Inc. We are passionate about transforming your outdoor spaces into breathtaking landscapes that enhances your lifestyles</p>
            </div>

            <div className="mt-9 w-full flex justify-evenly items-center">
                <FaFacebook className="text-3xl text-[#c49326]"/>
                <FaInstagramSquare className="text-3xl text-[#c49326]"/>
                <FaLinkedin className="text-3xl text-[#c49326]"/>
                <FaTwitter className="text-3xl text-[#c49326]"/>
            </div>

           </div>

           <div className='flex max-md:w-full max-md:mt-8 w-1/4 flex-col items-center'>
            <div className="w-full">
                <h2 className="font-semibold text-2xl text-center text-white">Our Company</h2>
            </div>

            <div className="mt-4">
                <p className='text-white'>Home</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>About uS</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>Services</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>Vintage Construction</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>Gallery</p>
            </div>           

           </div>

           <div className='flex max-md:w-full max-md:mt-8 w-1/4 flex-col items-center'>
            <div className="w-full">
                <h2 className="font-semibold text-2xl text-center text-white">Support</h2>
            </div>

            <div className="mt-4">
                <p className='text-white'>Testimonials</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>Blogs</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>FAQs</p>
            </div>

            <div className="mt-4">
                <p className='text-white'>Contact Us</p>
            </div>

            <div className="mt-4">
                <p className='text-white'></p>
            </div>
                     
           </div>

           <div className='flex max-md:w-full max-md:mt-8 w-1/4 flex-col items-center'>
            <div className="w-full">
                <h2 className="font-semibold text-2xl text-center text-white">Join Our Newsletter</h2>
            </div>
            
            <div className="w-full rounded-xl mt-4 flex border-2">
                <input className="w-full rounded-xl p-1 mr-2 bg-[#0000] outline-0" placeholder="Enter your email"/>
                <button className="bg-[#c49326] p-2 text-white rounded-xl">Subscribe</button>
            </div>

            <div className="mt-4 flex justify-center items-center w-full">
                <FaPhoneAlt className="text-xl text-[#c49326] mr-3"/>
                <p className='text-white'>Contact Us</p>
            </div>

            <div className="mt-4 flex justify-center items-center w-full">
                <FaLocationDot className="text-xl text-[#c49326] mr-3"/>
                <p className='text-white'>Coachella valley, CA</p>
            </div>

            <div className="mt-4 flex justify-center items-center w-full">
                <MdEmail className="text-xl text-[#c49326] mr-3"/>
                <p className='text-white'>office@vintageoutdoorrinc.com</p>
            </div>
           </div>
          </div>
        </div>
    </div>
    <div className="w-full bg-[#252525] flex justify-center items-center p-3">
        <p className="text-center text-white">Copyright 2024 by Abraham Gutierrez</p>
    </div>
    </>
  )
}

export default Footer;