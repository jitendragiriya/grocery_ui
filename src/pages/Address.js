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

const Address = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center my-10">
            Home <AiOutlineRight style={{ marginInline: "10px" }} /> My Cart{" "}
            <AiOutlineRight style={{ marginInline: "10px" }} /> Checkout{" "}
            <AiOutlineRight style={{ marginInline: "10px" }} />
            Add New Address
          </div>
          <div className="rounded-md overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3524468.1852294556!2d-157.33889415471364!3d19.823918951304996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689163705252!5m2!1sen!2sin"
              width="100%"
              height="750"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-8 left-8 p-6 bg-white rounded-lg w-[381px]">
              <div className="font-bold text-xl">Confirm Delivery Location</div>
              <div className="border rounded-md px-4 py-2 flex items-center my-4 justify-between">
                <div>Ok, Uk</div>
                <div className="text-[#0DA487]">Change</div>
              </div>{" "}
              <button className="w-full h-[40px] bg-[#0DA487] text-white rounded-[10px]">
                Confirm Location & Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Address;
