import React from "react";
import Hero from "../Section/Hero/Hero";
import WhoAreWeSection from "../Section/WhoAreWeSection/WhoAreWeSection";
import WhatWeOfferSection from "../Section/WhatWeOfferSection/WhatWeOfferSection";
import WhatHappens from "../Section/WhatHappens/WhatHappens";
import SponsorSection from "../Section/SponsorSection/SponsorSection";
import ComingTo from "../Section/ComingTo/ComingTo";
import Community from "../Section/Community/Community";

const Home = () => {
  return (
    <div className="Home font-nunito-eb">
      {/* font-montserrat-eb  bg-[#f8f8f8] text-black*/}
      <Hero />
      <WhoAreWeSection />
      <WhatWeOfferSection />
      <WhatHappens />
      <SponsorSection />
      <ComingTo />
      <Community />
    </div>
  );
};

export default Home;
