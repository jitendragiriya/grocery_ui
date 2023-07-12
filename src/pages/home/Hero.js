import React from "react";
import img1 from "../../assets/banner/Rectangle 1.jpg";
import img2 from "../../assets/banner/Rectangle 2.jpg";
import img3 from "../../assets/banner/Rectangle 3.png";

const Hero = () => {
  return (
    <>
      <div className="flex max-w-7xl mx-auto mt-8 gap-6">
        <div className="w-[843px] relative">
          <img src={img1} />

          <div className="absolute top-14 left-10">
            <div>Exclusive Offers</div>
            <div className="text-[48px] font-bold">
              <span className="text-[#0DA487]">Specialist</span> in the
              <br /> grocery stores
            </div>
            <div className="my-4">Only this week... Don’t miss</div>
            <button className="mt-4 w-fit h-[40px] bg-[#282D26] text-white px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[407px] h-[200px] relative">
            <img src={img2} />
            <div className="absolute top-10 left-10">
              <div>Exclusive Offers</div>
              <div className="text-[24px] font-bold mt-4">
                <span className="text-[#0DA487]">Specialist</span> in the
                <br /> grocery stores
              </div>
            </div>
          </div>
          <div className="w-[407px] h-[200px] relative">
            <img src={img3} /><div className="absolute top-10 left-10">
              <div>Exclusive Offers</div>
              <div className="text-[24px] font-bold mt-4">
                <span className="text-[#0DA487]">Specialist</span> in the
                <br /> grocery stores
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
