import React from "react";
import Hero from "../Section/Hero/Hero";
import WhoAreWeSection from "../Section/WhoAreWeSection/WhoAreWeSection";

const Home = () => {
  return (
    <div className="Home font-nunito-eb">
      {/* font-montserrat-eb  bg-[#f8f8f8] text-black*/}
      <Hero />
      <WhoAreWeSection />
    </div>
  );
};

export default Home;
