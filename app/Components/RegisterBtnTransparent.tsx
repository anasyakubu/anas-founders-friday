import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const RegisterBtnTransparent = () => {
  return (
    <div className="RegisterBtnTransparent">
      <button className="p-3 px-8 text-md  border bg-transparent text-white border-[#5C00B3] rounded-full">
        <span className="text-[#5C00B3] flex gap-3">
          <span>Register</span>{" "}
          <span className="py-1">
            <FaLongArrowAltRight />
          </span>{" "}
        </span>
      </button>
    </div>
  );
};

export default RegisterBtnTransparent;
