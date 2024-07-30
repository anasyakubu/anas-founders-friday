import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="p-10 py-10">
        <hr className="bg-gray-400 h-[1.3px]" />
        <div className="mt-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*  */}

            <div className="flex flex-1 justify-start">
              <a
                href=""
                className="p-3 bg-[#5C00B3] text-white rounded-full m-2 icon"
                target="_blank"
              >
                <FaLinkedin className="text-white" />
              </a>
              <a
                href=""
                className="p-3 bg-[#5C00B3] text-white rounded-full m-2 icon"
                target="_blank"
              >
                <FaGithub className="text-white" />
              </a>
              <a
                href=""
                className="p-3 bg-[#5C00B3] text-white rounded-full m-2 icon"
                target="_blank"
              >
                <FaGithub className="text-white" />
              </a>
            </div>

            {/*  */}
            <div className="">
              <div className=""></div>
            </div>
            {/*  */}
            <div className="">
              <div className="">
                <p className="text-md flex gap-5 font-semibold">
                  <span className="text-md text-[#5C00B3]">
                    <Link href="/">Home</Link>
                  </span>

                  <span className="text-md">
                    <Link href="/">About Us</Link>
                  </span>
                  <span className="text-md">
                    <Link href="/">Gallery</Link>
                  </span>
                  <span className="text-md">
                    <Link href="/">Contact Us</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
