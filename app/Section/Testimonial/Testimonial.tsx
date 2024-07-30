import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import User from "../../assets/Ellipse 309.png";
import Image from "next/image";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="p-10">
        <div className="text-right">
          <div className="flex justify-end text-left">
            <div className="flex gap-3">
              <button className="p-3 border border-[#5C00B3] rounded-full">
                <FaLongArrowAltLeft />
              </button>
              <button className="p-3 border border-[#5C00B3] rounded-full">
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 text-center">
          <h2 className="text-3xl font-bold">
            What Do Our Attendees Have To Say?
          </h2>
          <p className="mt-3 text-sm text-gray-600">Well See For Yourself!</p>
        </div>
        <div className="mt-10">
          <div className="p-5 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            <div className="">
              <div className="">
                <div className="p-3 rounded-full border border-[#5C00B3] w-32 text-center">
                  <div className="">
                    <Image className="w-32" src={User} alt="User" />
                  </div>
                </div>
                <div className="my-5">
                  <h6 className="text-lg font-bold">Mr Belba Ngoy</h6>
                  <p className="text-sm text-gray-700 mt-3">
                    Always a remarkable experience <br /> for my team and myself
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="">
                <div className="p-3 rounded-full border border-[#5C00B3] w-32 text-center">
                  <div className="">
                    <Image className="w-32" src={User} alt="User" />
                  </div>
                </div>
                <div className="my-5">
                  <h6 className="text-lg font-bold">Mr Belba Ngoy</h6>
                  <p className="text-sm text-gray-700 mt-3">
                    Always a remarkable experience <br /> for my team and myself
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="">
                <div className="p-3 rounded-full border border-[#5C00B3] w-32 text-center">
                  <div className="">
                    <Image className="w-32" src={User} alt="User" />
                  </div>
                </div>
                <div className="my-5">
                  <h6 className="text-lg font-bold">Mr Belba Ngoy</h6>
                  <p className="text-sm text-gray-700 mt-3">
                    Always a remarkable experience <br /> for my team and myself
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
