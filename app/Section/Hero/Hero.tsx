import Nav from "@/app/Components/Nav";
import React from "react";
import Image from "next/image";
import Logos from "../../assets/Frame 18.png";
import { FaAnglesRight } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import HeroImage from "../../assets/Hero-image.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero bg-[#f8f8f8] text-black">
      <Nav />
      <div className="p-10 py-5">
        <div className="p-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div className="">
              <p className="mb-2 text-sm font-semibold">
                Join our premier monthly meetup for startup founders and tech
                visionaries
              </p>
              <h2
                className="text-4xl font-bold text-[#5C00B3]"
                style={{ letterSpacing: "0.5px", lineHeight: "2rem" }}
              >
                Connect, Collaborate, Innovate!
              </h2>
              <p
                className="mt-4 text-lg text-gray-900"
                style={{ letterSpacing: "0.3px", lineHeight: "2rem" }}
              >
                Every last Friday of the month, we bring together the brightest
                minds in our local tech ecosystem. Whether you`re a seasoned
                entrepreneur or just starting your journey, Founder`s Friday is
                your launchpad for new ideas, valuable connections, and
                game-changing opportunities.
              </p>
              <button className="mt-5 p-5 px-12 font-bold border text-[#5C00B3] border-[#5C00B3] rounded-full flex gap-3">
                <span> Register For Our Next Event</span>

                <span className="py-1">
                  <FaAnglesRight />
                </span>
              </button>
              <p className="mt-3 text-sm font-semibold text-[#5C00B3]">
                Join Us for our next meetup on the 26th of July 2024
              </p>
              <div className="mt-8">
                <Image className="w-72" src={Logos} alt="Logos" />
              </div>
              <p className="mt-10 text-sm font-semibold flex gap-3">
                <span>Become a collaborator today</span>
                <span className="py-1">
                  <FaExternalLinkAlt />
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <Image src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
