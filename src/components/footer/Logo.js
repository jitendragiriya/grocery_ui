import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/Vector.png";
import logo2 from "../../assets/logo/Logo.png";
import { ROUTES } from "../../contants";

const Logo = () => {
  return (
    <> 
      <Link to={ROUTES.home} className="flex items-center">
        <img src={logo1} />
        <img src={logo2} className="mt-4 ml-3" />
      </Link>
    </>
  );
};

export default Logo;
