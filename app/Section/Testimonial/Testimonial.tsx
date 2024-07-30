import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="p-10">
        <div className="text-right">
          <div className="flex justify-end text-left">
            <div className="flex gap-3">
              <button className="p-3 border border-[#5C00B3] rounded-full">
                <FaLongArrowAltLeft />
              </button>
              <button className="p-3 border border-[#5C00B3] rounded-full">
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
