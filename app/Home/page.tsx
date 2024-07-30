import React from "react";
import Hero from "../Section/Hero/Hero";
import WhoAreWeSection from "../Section/WhoAreWeSection/WhoAreWeSection";
import WhatWeOfferSection from "../Section/WhatWeOfferSection/WhatWeOfferSection";
import WhatHappens from "../Section/WhatHappens/WhatHappens";
import SponsorSection from "../Section/SponsorSection/SponsorSection";
import ComingTo from "../Section/ComingTo/ComingTo";
import Community from "../Section/Community/Community";
import Mission from "../Section/Mission/Mission";
import Testimonial from "../Section/Testimonial/Testimonial";
import Join from "../Section/Join/Join";
import Footer from "../Section/Footer/Footer";

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
      <Mission />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
