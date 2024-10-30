import React from "react";
import dotat from "../../../assets/icon/Group 33091.png";
import heroin from "../../../assets/img/Mask Group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <div>
      <section
        id="banner"
        className="bg-[rgb(255,251,240)] px-8 py-10 md:px-20 md:py-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="banner_txt w-full md:w-1/2">
            <h1 className="text-4xl md:text-[80px] font-bold text-[#fabe4c] tracking-wide leading-[5.25rem] normal-case">
              Be the Penguins <br />
              <span className="text-[#363958] ">of Winter</span>
            </h1>
            <p className="mt-2 mb-6 w-full md:w-[357px] text-base text-[var(--basic)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="">
              <a
                href="#"
                className="py-4 px-8 bg-[#85A019] text-white rounded hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                BUY NOW
              </a>
            </div>
          </div>
          <div className="banner_img w-full md:w-1/2 relative">
            <img src={dotat} alt="" className="w-full h-full" />
            <img
              src={heroin}
              className="absolute top-[-12%] left-[5%] h-full w-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
