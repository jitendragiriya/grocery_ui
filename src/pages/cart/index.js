import React from "react";

import { AiOutlineRight } from "react-icons/ai";
import { PRODUCTS } from "../home/Products";
import { AiOutlineDelete } from "react-icons/ai";
import { ROUTES } from "../../contants";
import { useNavigate } from "react-router-dom";

const HEADERS = ["Product Name", "Price", "Qty", "Total", "Remove"];

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center my-10">
            Home <AiOutlineRight style={{ marginInline: "10px" }} /> My Cart
          </div>
          <div className="flex gap-6">
            <div className="w-[843px] rounded-[10px] p-7 border">
              <div className="font-bold text-xl">Items in your cart</div>
              <div className="flex mt-8">
                {HEADERS.map((pr, index) => (
                  <div
                    className={`${
                      !index ? "w-[450px]" : "w-[140px]"
                    } whitespace-nowrap justify-end`}
                  >
                    {pr}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                {PRODUCTS.slice(0, 3).map((pr) => (
                  <>
                    <div className="flex items-center my-5">
                      <div className="w-[80px]">
                        <img src={pr?.image}></img>
                      </div>
                      <div className="w-[270px]">
                        <div className="text-[14px]">{pr.category}</div>
                        <div className="font-semibold">{pr.title}</div>
                      </div>
                      <div className="w-[100px]">${pr?.sellPrice}</div>
                      <div className="border rounded py-2 mr-4">
                        <span className="px-3 cursor-pointer">-</span>
                        <span className="px-3 border-l border-r">2</span>
                        <span className="px-3 cursor-pointer">+</span>
                      </div>
                      <div className="w-[100px]">${+pr?.sellPrice + 4}</div>
                      <div className="p-2 rounded-xl border cursor-pointer">
                        <AiOutlineDelete style={{ fontSize: "30px" }} />
                      </div>
                    </div>
                    <input
                      className="w-full h-10 border rounded px-4 outline-none"
                      placeholder="special instruction"
                    ></input>{" "}
                  </>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border rounded-[10px] p-6 w-[407px]">
                <div className="text-xl font-semibold mb-6">
                  Customer details
                </div>
                <div>John Deo</div>
                <div className="font-semibold">+91 9868324***</div>
              </div>
              <div className="border rounded-[10px] p-6 w-[407px]">
                <div className="text-xl font-semibold mb-6">
                  Billing details
                </div>
                <div className="flex items-center justify-between my-2">
                  <div>Sub Total</div>
                  <div>$ 45.00</div>
                </div>
                <div className="flex items-center justify-between my-2">
                  <div>discount</div>
                  <div>$ 10.00</div>
                </div>
                <div className="flex items-center justify-between my-2">
                  <div>Shipping</div>
                  <div>$ 5.00</div>
                </div>
                <div className="border p-2 px-4 rounded-md flex justify-between mt-8">
                  <div>Promo Code</div>
                  <div className="text-[#0DA487]">Apply</div>
                </div>
                <div className="flex items-center justify-between my-7">
                  <div>Total</div>
                  <div>$ 5.00</div>
                </div>
                <button
                  className="w-[356px] h-[40px] bg-[#0DA487] text-white  rounded-[10px] mt-8"
                  onClick={() => navigate(ROUTES.checkout)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
