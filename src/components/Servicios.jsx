import React from 'react'
import imgServicios from "../assets/image3.png"
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { AiFillProduct } from "react-icons/ai";
import { AiFillAccountBook } from "react-icons/ai";
import { FaBath } from "react-icons/fa";

const Servicios = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col p-3 mt-20 pb-20 bg-[#dfdcd7]'>
      
      <div className='flex justify-center items-center flex-col'>
        <div className='imgServices'>
          <img className='w-32' src={imgServicios} />
        </div>
        <h3 className='text-center font-extralight text-6xl font-serif'>Our Services</h3>
        <p className='text-center text-xl font-light'>Comprehensive solutions for your outdoor and construction needs.</p>

      </div>

      <div className="w-full max-md:flex-col flex justify-around items-center mt-14">
        <div className='w-[25%] max-md:w-full max-md:mb-4 bg-white p-7 rounded-3xl shadow-lg'>
           <div className='w-full '>
             <img className='rounded-xl' src={img1}/>
           </div>

           <div className='w-64 mt-5 max-sm:w-full max-lg:w-full '>
            <h4 className='text-4xl 
             max-sm:text-base max-lg:text-lg max-md:text-base text-[#40b9cd] '>Outdoor Living Spaces</h4>
           </div>

           <div className='w-full mt-5'>
            <p>Patios & Decks: Custom outdoor patios and decks. Outdoor kitchens: Gourmet kitchens for outddor dining. Pools 6 water Features: Stunning pools and waterfalls. Fire Pits 6 Heating Cozy fire pits and heaters. Landscape Lighthing: outdoor lighting. solar panels: Eco-friendly solar installtions.</p>
           </div>

           <div className='w-full mt-5 flex items-center justify-center'>
            <button className='w-full flex items-center justify-between p-4 shadow-2xl rounded-full font-semibold bg-slate-100 text-lg'>
              Read More
              <AiFillProduct className='text-4xl text-[#40b9cd] ' />
            </button>
           </div>


        </div>

        <div className='w-[25%] max-md:w-full max-md:mb-4 bg-white p-7 rounded-3xl shadow-lg'>
           <div className='w-full '>
             <img className='rounded-xl' src={img2}/>
           </div>

           <div className='w-64 mt-5 max-sm:w-full max-lg:w-full'>
            <h4 className='text-4xl max-sm:text-base max-lg:text-lg max-md:text-base text-[#40b9cd]'>Landscaping Services</h4>
           </div>

           <div className='w-full mt-12 mb-9'>
            <p>Desing & installation: expert landscape desing and setup Garden Maintenance: Ongoing garden care. Irrigation Systems: Efficinet watering solutions. Tree Care: Professional tree maintenance.</p>
           </div>

           <div className='w-full mt-5 flex items-center justify-center'>
            <button className='w-full flex items-center justify-between p-4 shadow-2xl rounded-full font-semibold bg-slate-100 text-lg'>
              Read More
              <AiFillAccountBook className='text-4xl text-[#40b9cd] ' />
            </button>
           </div>


        </div>

        <div className='w-[25%] max-md:w-full max-md:mb-4 bg-white p-7 rounded-3xl shadow-lg'>
           <div className='w-full '>
             <img className='rounded-xl' src={img3}/>
           </div>

           <div className='w-72 mt-5 max-sm:w-full max-lg:w-full'>
            <h4 className='text-4xl max-sm:text-base max-lg:text-lg max-md:text-base text-[#40b9cd]'>Vintage Construction Inc</h4>
           </div>

           <div className='w-full mt-3'>
            <p>New Construction: Custom home and buildings. Remodels: Exper home and business renovations. ADUs: Accessory Dwelling Units for extras space. Investment Properties Quality Constructions for investors Commercial Proyects: Tailored business construction.</p>
           </div>

           <div className='w-full mt-5 flex items-center justify-center'>
            <button className='w-full flex items-center justify-between p-4 shadow-2xl rounded-full font-semibold bg-slate-100 text-lg'>
              Read More
              <FaBath className='text-4xl text-[#40b9cd] ' />
            </button>
           </div>


        </div>
      </div>
      

    </div>
  )
}

export default Servicios;