import React from "react";
import "./WhoAreWeSection.scss";
import Image from "next/image";
import SecImage from "../../assets/IMG_2857 1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiBag1 } from "react-icons/ci";
import RegisterBtn from "@/app/Components/RegisterBtn";

const WhoAreWeSection = () => {
  return (
    <div className="WhoAreWeSection">
      <div className="p-10">
        <div className="p-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <Image className="" src={SecImage} alt="Image" />
          </div>
          <div className="p-5">
            <div className="borderLine">
              <h2 className="text-4xl font-extrabold">Who Are We?</h2>
              <p
                className="mt-5 text-lg text-gray-500"
                style={{ letterSpacing: "0.3px", lineHeight: "2rem" }}
              >
                Born from the vibrant startup ecosystem of Abuja, we recognized
                the need for a consistent, high-quality networking platform
                where founders, innovators, and tech enthusiasts could connect,
                share ideas, and foster collaboration.
              </p>
              <div className="py-5 flex gap-5">
                {/* <button className="p-3 px-8 text-md  border bg-[#5C00B3] border-[#5C00B3] rounded-full">
                  <span className="text-[white] flex gap-3">
                    <span>Register</span>{" "}
                    <span className="py-1">
                      <FaLongArrowAltRight />
                    </span>{" "}
                  </span>
                </button> */}
                <RegisterBtn />
                <button className="p-3 px-8 text-md  border bg-transparent border-[#5C00B3]  rounded-full">
                  <span className="text-[#5C00B3] flex gap-3">
                    <span>Donate</span>{" "}
                    <span className="py-1">
                      <CiBag1 />
                    </span>{" "}
                  </span>
                </button>
              </div>
              <p className="text-md font-semibold mt-20">
                Founder`s Friday is more than just a meetup — it`s a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
