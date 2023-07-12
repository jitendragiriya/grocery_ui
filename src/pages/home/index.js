import React from "react";
import TopCategories from "../../components/TopCategories";
import Products from "./Products";
import OurMap from "../../components/OurMap";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
    <Hero/>
      <div className="flex gap-6 max-w-7xl mx-auto py-12">
        <TopCategories />
        <Products />
      </div>

      <OurMap />
    </>
  );
};

export default Home;
