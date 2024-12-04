import React from "react";
import logogaleria from "../assets/image3.png";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/gal2.jpg";
import bannergal2 from "../assets/bannergal2.jpg";


const Gallery = () => {
  return (
    <div className="w-full max-md:h-full bg-center bg-[url('./assets/gale.jpg')] bg-cover h-[600px]">
      <div className="flex w-full max-md:h-full max-md:flex-col h-full p-4 justify-evenly items-center text-white bg-[#00000091]">

        <div className="w-1/3 max-md:w-full max-md:items-center flex flex-col justify-items-start ">
          <img className="w-24 relative right-5 max-sm:right-1" src={logogaleria} />
          <h5 className="w-64 max-sm:w-full max-sm:text-center text-5xl font-serif">Explore Our Gallery</h5>
          <hr className="w-44 mt-4 border-[#c49326]" />

          <div className="mt-4">
            <p>
              Take a look at our recent Project to see the quality and
              creativity we bring to every job. Whether it's a beautifully
              landscaped garden or a newly built home, our portfolio showcases
              the best of what Vintage Outdoor Inc. and Vintage Construction
              Inc, can offet.
            </p>
          </div>
        </div>

        <div className="w-1/3 max-sm:w-full max-md:w-full max-md:mt-10 grid grid-cols-3 gap-x-8 gap-y-4">
          <div className="w-36 max-sm:w-24 h-52 rounded-lg">
            <img className="h-full rounded-lg" src={im1}/>
          </div>
          <div className="w-36 max-sm:w-24 h-52 rounded-lg">
          <img className="h-full rounded-lg" src={im2}/>
          </div>
          <div className="w-36 max-sm:w-24 h-52 rounded-lg">
          <img className="h-full rounded-lg" src={im3}/>
          </div>
          
          <div className="col-start-1 h-32 rounded-lg">
            <img className="h-full rounded-lg" src={bannergal2} />
          </div>
          <div className="rounded-2xl col-span-2 h-32 bg-[url('./assets/icon-img.jpg')] bg-cover bg-center">
            <div className="flex w-full cursor-pointer h-full justify-center items-center bg-[#c492268e] hover:bg-[#c49226] rounded-2xl flex-col transition-all">
              <h5 className="w-full text-xl text-center font-semibold">View Our Work</h5>
              <hr className="w-44 border-1 border-[#f3f1ee]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
