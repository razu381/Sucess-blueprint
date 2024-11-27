import React from "react";
import HeroSlider from "../Components/Home/HeroSlider";
import Services from "../Components/Home/Services";
import Newsletter from "../Components/Home/Newsletter";
import Testimonials from "../Components/Home/Testimonials";

function Home() {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <div className="max-w-full lg:max-w-[1140px] mx-auto">
        <Services></Services>
      </div>
      <Newsletter />
      <div className="max-w-full lg:max-w-[1140px] mx-auto">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
