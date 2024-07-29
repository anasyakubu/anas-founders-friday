import React from "react";

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
            <div className="border border-[#5C00B3] p-6 rounded-lg flex justify-center items-center">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                  <div className="bg-purple-100 p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
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
                  <div className="bg-purple-100 p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">Community Impact</h2>
                    <p className="text-sm">
                      Support the growth and development of the startup
                      ecosystem.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-purple-100 p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
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
                  <div className="bg-purple-100 p-4 text-center w-48 h-48 rounded-full flex flex-col justify-center items-center">
                    <h2 className="text-md font-bold mb-2">Visibility</h2>
                    <p className="text-sm">
                      Gain exposure to a targeted audience of young
                      professionals and entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
