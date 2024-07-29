import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./SponsorSection.scss";

const SponsorSection = () => {
  return (
    <div className="SponsorSection">
      <div className="p-10">
        <div className="">
          <div className="">
            <h6 className="text-[#5C00B3] text-lg font-bold">
              Sponsor The Next Friday
            </h6>
            <h2 className="text-4xl font-extrabold">
              Why Sponsor <br /> Founders Friday?
            </h2>
          </div>
        </div>
        <div className="p-5 mt-5">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="border border-[#5C00B3] p-4 rounded-lg flex justify-center items-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                  <div className="bg-purple-200 border-[#5C00B3] border p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">
                      Networking Opportunities
                    </h2>
                    <p className="text-sm">
                      Connect with industry leaders, founders, and potential
                      partners.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-purple-100 border-[#5C00B3] border p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">Community Impact</h2>
                    <p className="text-sm">
                      Support the growth and development of the startup
                      ecosystem.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-purple-100 border-[#5C00B3] border p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">
                      Brand Association
                    </h2>
                    <p className="text-sm">
                      Align your brand with innovation and entrepreneurial
                      success.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-purple-200 border-[#5C00B3] border p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">Visibility</h2>
                    <p className="text-sm">
                      Gain exposure to a targeted audience of young
                      professionals and entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="">
              <div className="py-5">
                <h6 className="text-xl font-semibold">How To Sponsor</h6>
                <h5 className="text-lg font-thin">Ready to Make an Impact?</h5>
                <p className="mt-5 text-md">
                  Fill out the form below or contact us at [contact email/phone
                  number] to learn more about how you can sponsor the next
                  Founders Friday
                </p>
                <div className="mt-3">
                  <form action="">
                    <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                      <div className="">
                        <label className="text-md">Name</label>
                        <input
                          type="text"
                          className="w-full mt-2 p-2 border border-black outline-none rounded-md"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="">
                        <label className="text-md">Company (Optional)</label>
                        <input
                          type="text"
                          className="w-full mt-2 p-2 border border-black outline-none rounded-md"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    {/*  */}
                    <div className="mt-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                      <div className="">
                        <label className="text-md">Email</label>
                        <input
                          type="text"
                          className="w-full mt-2 p-2 border border-black outline-none rounded-md"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="">
                        <label className="text-md">Phone</label>
                        <input
                          type="text"
                          className="w-full mt-2 p-2 border border-black outline-none rounded-md"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <button className="flex gap-3 p-3 px-5 bg-[#5C00B3] text-white rounded-md">
                        <span>Sponsor</span>
                        <span className="py-1">
                          <FaArrowRightLong />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
