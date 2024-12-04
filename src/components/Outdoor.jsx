import React from 'react'
import image29 from "../assets/29.png";
import image30 from "../assets/30.jpg";

const Outdoor = () => {
  return (
    <>
    <div className='flex justify-around items-center mt-20 flex-nowrap grow max-md:flex-col '>
     <div className="img w-1/3 max-md:w-full bg-white p-5 flex items-center justify-center flex-col rounded-lg">
       <div className='w-80 max-md:w-full mb-6'>
        <img className='w-full' src={image29}/>
       </div>

       <div className='w-80 max-md:w-full'>
        <img className="w-full rounded-lg" src={image30}/>
       </div>
     </div>

     <div className="img w-1/2 max-md:w-full max-md:mt-5  bg-white p-5 flex items-center justify-center flex-col flex-nowrap rounded-lg">
       <div className='w-full pb-3'>
         <h2 className='text-[#c49326] font-extralight text-6xl font-serif max-sm:text-4xl'>Welcome to Vintage Outdoor Inc.</h2>
       </div>

       <div className='mt-7'>
        <p>At Vitage Outdoor Inc. We are passionate about transforming your outdoor spaces into breathtaking landcapes the enhances your lifetyle.</p>
       </div>

       <div className='mt-7'>
        <p>With years of expertise in custom desing, installation, and maintenance, our goal is to brind your vision to life, whether your're dreaming of a serene garden, a luxurios outdoor living space, or a vibrat and function  yard.</p>
       </div>

       <div className='mt-7 mb-8'>
        <p>But we don't just stop at the outdoors. We're excited to introduce vintage Contruction Inc, a new division of our company specializing in high-guality Contruction services. from new home builds to remodels. ADUs, and commercial project, Vintage contruction Inc, is here to make your construction dreams a reality.</p>
       </div>
     </div>

    
    </div>

    <div className="w-full flex justify-center items-center mt-8 mb-5 ">
      <div className="w-[20%] max-md:w-[40%] flex justify-center items-center ">
        <button className="w-full p-3 rounded-3xl bg-[#c49326] text-white font-semibold">Read More</button>
      </div>
    </div>
    </>
  )
}

export default Outdoor;