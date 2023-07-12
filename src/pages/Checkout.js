import React from "react";

import { AiOutlineRight } from "react-icons/ai";
import { PRODUCTS } from "./home/Products";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import vc1 from "../assets/vectors/paypal.png";
import vc2 from "../assets/vectors/logos_google-pay-icon.png";
import vc3 from "../assets/vectors/simple-icons_phonepe.png";
import vc4 from "../assets/vectors/mastercard.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../contants";

const PAYMENT_METHODS = [
  { title: "Paypal", icon: vc1 },
  { title: "Google Pay", icon: vc2 },
  { title: "Phone Pe", icon: vc3 },
  { title: "Credit/Debit Card", icon: vc4 },
];

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center my-10">
            Home <AiOutlineRight style={{ marginInline: "10px" }} /> My Cart{" "}
            <AiOutlineRight style={{ marginInline: "10px" }} /> Checkout
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-6">
              <div className="w-[843px] rounded-[10px] p-7 border h-fit">
                <div className="font-bold text-xl">Select Address</div>
                <div className="flex mt-8 gap-6">
                  {[...Array(2)].map((v, index) => (
                    <div className="border rounded-md p-4 w-[381px]">
                      <div className="flex items-center">
                        {!index ? (
                          <BiRadioCircleMarked
                            style={{ fontSize: "25px", color: "green" }}
                          />
                        ) : (
                          <BiRadioCircle
                            style={{ fontSize: "25px", color: "green" }}
                          />
                        )}

                        <span className="font-semibold ml-2">Sean Smith</span>
                      </div>
                      <div className=" ml-8">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[843px] rounded-[10px] p-7 border h-fit">
                <div className="font-bold text-xl">Payment Method</div>
                <div className="flex mt-8 gap-6">
                  {PAYMENT_METHODS.map((v, index) => (
                    <div className="border rounded-md p-4 w-[381px] relative">
                      <div className="absolute top-3 left-3">
                        {!index ? (
                          <BiRadioCircleMarked
                            style={{ fontSize: "25px", color: "green" }}
                          />
                        ) : (
                          <BiRadioCircle
                            style={{ fontSize: "25px", color: "green" }}
                          />
                        )}
                      </div>
                      <div className="flex flex-col items-center">
                        <img src={v?.icon} />
                        <span>{v?.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border rounded-[10px] p-6 w-[407px]">
                {PRODUCTS.slice(0, 2).map((pr) => (
                  <div className="flex items-center my-5">
                    <div className="w-[100px]">
                      <img src={pr?.image}></img>
                    </div>
                    <div className="w-[270px]">
                      <div className="text-[14px]">{pr.category}</div>
                      <div className="font-semibold">{pr.title}</div>
                    </div>
                  </div>
                ))}

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
                <div className="flex items-center justify-between my-2">
                  <div>Tax</div>
                  <div>$ 5.00</div>
                </div>

                <div className="flex items-center justify-between my-7">
                  <div>Total</div>
                  <div>$ 5.00</div>
                </div>
                <button
                  className="w-[356px] h-[40px] bg-[#0DA487] text-white  rounded-[10px] mt-8"
                  onClick={() => navigate(ROUTES.address)}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
