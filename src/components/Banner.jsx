import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[url('./assets/banner.jpg')] bg-cover h-[600px]">
      <div className="flex flex-col w-full h-full p-4 justify-center items-center text-white bg-[#00000091]">
        <div className="mt-1">
          <h1 className="text-6xl font-bold max-sm:text-4xl">Transforming spaces,</h1>
          <div className="flex justify-between items-center">
            <h3 className="text-3xl ml-px text-[#c49326] font-semibold">Building Dreams.</h3>
          </div>
        </div>

        <div className="flex justify-center items-center text-lg max-sm:text-xl relative left-[80px] max-sm:left-[0px] max-sm:bottom-36 bottom-28">
          <p className="font-semibold max-sm:text-base">
            Landscaping <strong className="font-bold text-[#c49326]">|</strong> Outdoor Living <strong className="font-bold text-[#c49326]">| </strong>
            Construction Services
          </p>
        </div>

        <div className="w-1/2 max-md:w-full mt-3 flex justify-evenly">
          <button className="w-[200px] max-sm:w-[150px] font-semibold p-2 bg-[#68b6be] hover:bg-[#7dd9e4f3] rounded-3xl">Explore Our Services</button>
          <button className="w-[200px] max-sm:w-[150px] font-semibold p-2 bg-[#3233330c] border-2 border-[#c49326] hover:bg-[#c49326] hover:border-[#c49326] rounded-3xl">View Our Work</button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
