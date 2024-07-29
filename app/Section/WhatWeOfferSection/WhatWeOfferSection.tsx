// import React from 'react'
import WhatWeOfferCard from "@/app/Components/WhatWeOfferCard";

const WhatWeOfferSection = () => {
  return (
    <div className="WhatWeOfferSection">
      <div className="p-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">What We Offer</h2>
        </div>
        <div className="mt-10">
          <WhatWeOfferCard />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
