import React from "react";
import logo1 from "../assets/logo/Vector.png";
import logo2 from "../assets/logo/Logo.png";
import { NAV_LINKS, ROUTES } from "../contants";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-full h-[90px] bg-[#8CC32F26] relative">
        <div className="mx-auto max-w-[1280px] w-[1280px] flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link to={ROUTES.home} className="flex items-center">
              <img src={logo1} />
              <img src={logo2} className="mt-4 ml-3" />
            </Link>
            <nav className="flex items-center ml-12">
              {NAV_LINKS?.map((nav) => (
                <div className="font-[Rubik] font-normal text-base line mx-4 p-2 capitalize">
                  {nav?.title}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex items-center relative">
            <input
              className="w-[476px] h-[50px] rounded-lg border px-[20px] pl-10 outline-none bg-white"
              placeholder="Search Product"
            ></input>
            <span className="absolute top-4 left-3">
              <BiSearch style={{ fontSize: "20px" }} />
            </span>
            <Link to={ROUTES.cart} className="w-[129px] h-[50px] rounded-lg border px-[20px] ml-4 bg-white flex items-center justify-between">
              <spna>
                <AiOutlineShoppingCart />
              </spna>
              <span>My Cart</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
