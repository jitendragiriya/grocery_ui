import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div className="w-[296px] h-[391px] rounded-[10px] border relative">
        <div className="flex items-center justify-center w-full h-[200px] relative my-2 mb-4">
          <img
            src={product.image}
            className="absolute top-0  h-full w-full object-contain"
          ></img>
        </div>
        <span className="rounded-[6px] font-semibold text-[12px] bg-black text-white px-3 py-1 absolute top-6 left-6">
          {product?.off}% off
        </span>
        <div className="text-sm text-[#282D26] px-4">{product?.category}</div>
        <div className="font-semibold text-[#282D26] px-4 py-2">
          {product?.title}
        </div>
        <div className="font-semibold text-[#282D26] px-4 py-2">
          <span className="text-[#0DA487] text-[20px]">
            ${product?.sellPrice}
          </span>
          <span className="text-[#282D2680] ml-2">
            ${product?.price}
          </span>
        </div>
        <button className="w-[257px] h-[40px] bg-[#0DA487] text-white ml-4 rounded-[10px]">Add To Cart</button>
      </div>
    </>
  );
};

export default Product;
