"use client";
import React, { useEffect, useState } from "react";
import "./ComingTo.scss";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import RegisterBtnTransparent from "@/app/Components/RegisterBtnTransparent";

const ComingTo = () => {
  const locations = ["Abuja", "Kano", "Kaduna"];
  const [currentLocation, setCurrentLocation] = useState(locations[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % locations.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [locations.length]);

  useEffect(() => {
    setCurrentLocation(locations[index]);
  }, [index, locations]);

  return (
    <div className="ComingTo">
      <div className="p-10">
        <div className="">
          <div className="mt-10">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <h5
                  className="text-white text-2xl font-bold"
                  style={{ letterSpacing: "1px" }}
                >
                  Founders Friday is coming to
                </h5>
                <h1
                  className={`fade ${
                    fade ? "in" : "out"
                  } text-5xl mt-5 font-extrabold text-[#5C00B3]`}
                >
                  {currentLocation}
                </h1>
                <p className="mt-3 text-white text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ac rutrum felis. Nulla nibh lorem, facilisis vel est at,
                  vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget
                  accumsan leo suscipit id. Maecenas ut ante quis quam lobortis
                  consequat eu id turpis. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. 
                </p>
                <div className="mt-10">
                  <RegisterBtnTransparent />
                </div>
              </div>
              {/* Logo */}
              <div className="">
                <Image className="" alt="Logo" src={Logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingTo;
