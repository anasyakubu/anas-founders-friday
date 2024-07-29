import Nav from "@/app/Components/Nav";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/proptter-trans.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero bg-[#f8f8f8] text-black">
      <Nav />
      <div className="p-32 py-16">
        <div className="flex justify-center text-center">
          <div className="">
            <h6 className="text-md font-bold" style={{ letterSpacing: "1px" }}>
              Federated Login
            </h6>
            <h1 className="text-5xl font-bold mt-3">
              Simplify Your Online{" "}
              <span className="text-blue-600 font-extrabold underline">
                Experience.
              </span>
            </h1>
          </div>
        </div>
        <div className="mt-32 w-2/3 text">
          <h6
            className="text-lg font-semibold text-blue-800"
            style={{ letterSpacing: "1px" }}
          >
            Federated Login
          </h6>
          <p className="mt-5 text-sm">
            Sign in effortlessly with your existing Google, Facebook, or Twitter
            accounts. No need to remember yet another password!. Our platform
            integrates seamlessly with the tools and services you love, making
            your experience more cohesive and productive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
