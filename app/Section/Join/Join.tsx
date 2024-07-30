import React from "react";
import "./Join.scss";
import Image from "next/image";
import Logo from "../../assets/footer-logo.png";
import { FaAnglesRight } from "react-icons/fa6";

const Join = () => {
  return (
    <div className="Join">
      <hr className="bg-[#5C00B3]" />
      <div className="p-10">
        <div className="">
          {/* Logo */}
          <div className="">
            <Image src={Logo} className="w-32" alt="Logo" />
          </div>
          <div className="flex justify-center text-center mt-10">
            <div className="">
              <h1 className="text-4xl font-bold" style={{}}>
                Want To Be A Part Of Abuja’s Biggest <br /> Tech Community?
              </h1>
              <div className="mt-5 flex justify-center text-center">
                <button className="p-5 px-12 font-bold border text-[#5C00B3] border-[#5C00B3] rounded-full flex gap-3">
                  <span> Register For Our Next Event</span>

                  <span className="py-1">
                    <FaAnglesRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
