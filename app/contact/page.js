import React from "react";

const page = () => {
  return (
    <div className="">
      <h2 className="text-center text-[#1d1e20] text-[35px]">
        For personal coaching, collaborations, <br /> retreat information, and
        everything else
      </h2>
      <p className="text-center text-[#1d1e20] py-4 text-[14px]">
        take your practice to the next level. <br /> connect with Mira for more
        info. (:
      </p>
      <div
        className="w-full mt-8 overflow-hidden  h-[650px]  relative bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(/images/hello.jpeg)" }}
      >
        <div className="bg-[#1d1e20] flex items-center  w-full h-full opacity-[0.7]"></div>
        <div className="absolute px-2 z-50 flex top-0 left-0 justify-end items-center  w-full h-full  ">
          <div className="w-full sm:w-auto sm:min-w-[400px]  ">
            <h3 className="text-[#fff] py-6 text-[33px]">Get in touch. </h3>

            <form action="">
              <input
                className="text-[#777] outline-none focus:outline-none w-full sm:w-[80%] bg-[#fff] py-2 px-4"
                type="text"
                placeholder="Your name"
              />

              <input
                className="text-[#777] my-8 outline-none focus:outline-none w-full sm:w-[80%] bg-[#fff] py-2 px-4"
                type="text"
                placeholder=" Your email adress"
              />

              <textarea
                className="text-[#777]  outline-none focus:outline-none w-full sm:w-[80%] bg-[#fff] py-2 px-4"
                              name=""
                              placeholder="Enter your thoughtful message"
                id=""
                cols="10"
                rows="3"
                          ></textarea>
                        <button   className=" py-3 text-[#fff] mt-4 px-8 bg-[#99b3bf]" > LET'S CONNECT ❤️</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
