import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const RegisterBtn = () => {
  return (
    <div className="RegisterBtn">
      <button className="p-3 px-8 text-md  border bg-[#5C00B3] border-[#5C00B3] rounded-full">
        <span className="text-[white] flex gap-3">
          <span>Register</span>{" "}
          <span className="py-1">
            <FaLongArrowAltRight />
          </span>{" "}
        </span>
      </button>
    </div>
  );
};

export default RegisterBtn;
