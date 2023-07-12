import React from "react";
import ct1 from "../assets/categories/Vector (1).png";
import ct2 from "../assets/categories/Vector (2).png";
import ct3 from "../assets/categories/Vector (3).png";
import ct4 from "../assets/categories/Vector (4).png";
import ct5 from "../assets/categories/Vector (5).png";
import ct6 from "../assets/categories/Vector (9).png";
import ct7 from "../assets/categories/Vector (7).png";
import ct8 from "../assets/categories/Vector (8).png";
import { AiOutlineRight } from "react-icons/ai";

const TOP_CATEGORIES = [
  { title: "fruits & veetables", sub_categories: [], img: ct1 },
  { title: "Meats & Seafood", sub_categories: [], img: ct2 },
  { title: "Breakfast & Dairy", sub_categories: [], img: ct3 },
  { title: "Beverages", sub_categories: [], img: ct4 },
  { title: "Breads & Bakery", sub_categories: [], img: ct5 },
  { title: "Frozen Foods", sub_categories: [], img: ct6 },
  { title: "Biscuits & Snacks", sub_categories: [], img: ct7 },
  { title: "Grocery & Staples", sub_categories: [], img: ct8 },
];

const TopCategories = () => {
  return (
    <>
      <div className="w-[299px] border rounded-[10px] p-[20px] h-fit">
        <div className="font-bold text-[18px]">Top Categories</div>
        <div className="flex flex-col justify-start">
          {TOP_CATEGORIES.map((CT) => (
            <div className="flex my-3 items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <div className="flex w-[36px] h-[36px] rounded-md bg-[#0DA487] p-2 mr-4">
                  <img src={CT.img}></img>
                </div>
                <span>{CT.title}</span>{" "}
              </div>
              <span>
                <AiOutlineRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopCategories;
