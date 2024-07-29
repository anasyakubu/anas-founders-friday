import React from "react";

const WhatWeOfferCard = () => {
  return (
    <div className="WhatWeOfferCard">
      <div className="">
        <div className="">
          <div className="space-y-6">
            {[
              {
                title: "Monthly Meetups",
                description:
                  "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
              },
              {
                title: "Diverse Network",
                description:
                  "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
              },
              {
                title: "Knowledge Sharing",
                description:
                  "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
              },
              {
                title: "Collaboration Opportunities",
                description:
                  "Find potential co-founders, mentors, or partners for your next big venture.",
              },
              {
                title: "Community Support",
                description:
                  "Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start border-b pb-4">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-700 mt-1.5"></div>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferCard;
