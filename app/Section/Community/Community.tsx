import React from "react";
import Image from "next/image";
import Users from "../../assets/users.png";
import RegisterBtnTransparent from "@/app/Components/RegisterBtnTransparent";
import "./Community.scss";

const Community = () => {
  return (
    <div className="Community">
      <div className="p-10">
        <div className="">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Register And Be Part of Our Community
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              Join our community of over 1000+ founders, developers, and tech
              junkies in general. <br /> Be inspired by people who live to
              inspire!
            </p>
          </div>
          <div className="my-5">
            <Image src={Users} alt="Users" />
          </div>
          <div className="my-5 text-center">
            <RegisterBtnTransparent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
