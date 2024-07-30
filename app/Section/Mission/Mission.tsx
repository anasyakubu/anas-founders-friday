import React from "react";
import "./Mission.scss";
import Image from "next/image";
import SecImage from "../../assets/IMG_2721 1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiBag1 } from "react-icons/ci";
import RegisterBtn from "@/app/Components/RegisterBtn";

const Mission = () => {
  return (
    <div className="Mission">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <Image className="rounded-2xl" src={SecImage} alt="Image" />
          </div>
          <div className="pt-5">
            <div className="borderLine">
              <h2 className="text-xl font-extrabold">
                At Founder’s Friday, Every Friday Is a Learning Experience!
              </h2>
              <p
                className="mt-5 text-lg text-gray-500"
                style={{ lineHeight: "1.5rem" }}
              >
                Join us in our mission to transform ideas into impact and shape
                the future of Nigeria’s startup landscape.
              </p>
              <div className="py-5 flex gap-5">
                <RegisterBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
