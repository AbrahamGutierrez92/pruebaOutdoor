import React from "react";
import imgServicios from "../assets/image3.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const Blog = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col p-3 pb-20 bg-[#fff]">
      <div className="w-2/3 flex justify-center items-center flex-col">
        <div className="imgServices">
          <img className="w-32" src={imgServicios} />
        </div>
        <h3 className="text-center font-extralight text-6xl font-serif">
          Our Blog
        </h3>
        <p className="text-center text-xl font-light mt-2">
          Whether you're looking for expert advice, project inspiration, or
          updates on our recent work, you'll find it all here. Explore our
          articles to stay informed and inspired!.
        </p>
      </div>

      <div className="w-full max-md:flex-col flex  items-center mt-14 justify-evenly">

        <div className="w-3/12 max-md:w-full blog1 flex items-center justify-center flex-col">
          <div className="img ">
            <img className="rounded-2xl" src={blog1}/>
          </div>

          <div className="w-60 max-md:w-3/5 bg-white p-3 shadow-xl relative bottom-6 rounded-lg">
            <h3 className="font-semibold mt-2">The Ultimate Guide to Home Remodeling</h3>

            <p className="w-full mt-4">Trends and Tips</p>

            <div className="w-full shadow-xl mt-5 p-1 rounded-2xl ">
                <button className="w-full p-2 flex items-center justify-center  rounded-2xl text-center bg-slate-300 font-semibold">
                    Read More
                </button>
            </div>
          </div>
        </div>

        <div className="w-3/12 max-md:w-full max-md:mt-3 blog1 flex items-center justify-center flex-col">
          <div className="img ">
            <img className="rounded-2xl" src={blog2}/>
          </div>

          <div className="w-60 max-md:w-3/5 bg-white p-3 shadow-xl relative bottom-6 rounded-lg">
            <h3 className="font-semibold mt-2">Transform your Outdoor Space</h3>

            <p className="w-full mt-4">5 Essential Tips</p>

            <div className="w-full shadow-xl mt-5 p-1 rounded-2xl ">
                <button className="w-full p-2 flex items-center justify-center  rounded-2xl text-center bg-slate-300 font-semibold">
                    Read More
                </button>
            </div>
          </div>
        </div>

        <div className="w-3/12 max-md:w-full max-md:mt-3 blog1 flex items-center justify-center flex-col">
          <div className="img ">
            <img className="rounded-2xl" src={blog3}/>
          </div>

          <div className="w-60 max-md:w-3/5 bg-white p-3 shadow-xl relative bottom-6 rounded-lg">
            <h3 className="font-semibold mt-2">Sustainable Landscaping
            </h3>

            <p className="w-full mt-9">Eco-Friendly Practices</p>

            <div className="w-full shadow-xl mt-9 p-1 rounded-2xl ">
                <button className="w-full p-2 flex items-center justify-center  rounded-2xl text-center bg-slate-300 font-semibold">
                    Read More
                </button>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full flex justify-center items-center mt-20 mb-5 ">
        <div className="w-[20%] max-md:w-[40%] flex justify-center items-center ">
          <button className="w-full p-3 rounded-3xl bg-[#c49326] text-white font-semibold">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
