import React from "react";
import Wrapper from "../../components/shared/ComponentWrapper/Wrapper";
import Hero from "./Hero";
import OurBestSellingProducts from "./OurBestSellingProducts";
function Home() {
  return (
    <Wrapper>
      <div className="w-full flex flex-col gap-10">
        <Hero />
        <OurBestSellingProducts />
      </div>
    </Wrapper>
  );
}

export default Home;
