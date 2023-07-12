import React from "react";
import Logo from "./Logo";
import ct1 from "../../assets/icons/Icon.png";
import ct2 from "../../assets/icons/Icon (1).png";
import ct3 from "../../assets/icons/Icon (2).png";
import Copyright from "./OurCopyright";

const DETAILS = [
  { title: "Address", subTitle: "1762 School House Road", image: ct1 },
  { title: "Call Us", subTitle: "1233-777", image: ct2 },
  { title: "Email", subTitle: "groceyish@contact.com", image: ct3 },
];

const LINKS = [
  { head: "menu", subhead: ["home", "about us", "products"] },
  {
    head: "Quick links",
    subhead: [
      "terms & conditions",
      "return and refund policy",
      "shipping policy",
    ],
  },
  { head: "security", subhead: ["privacy policy", "payment policy"] },
];

const Footer = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols3 lg:grid-cols-4 gap-6 py-12 bg-white">
        <div>
          <Logo />
          <div>
            {DETAILS?.map((PR) => (
              <div className="flex items-center mt-3">
                <div>
                  <img src={PR.image}></img>
                </div>
                <div className="font-semibold mx-4 my-1">{PR.title}:</div>
                <div>{PR.subTitle}</div>
              </div>
            ))}
          </div>
        </div>
        {LINKS?.map((d) => (
          <div>
            <div className="text-[18px] font-semibold mb-6">{d?.head}</div>
            {d?.subhead?.map((dt) => (
              <div>
                <div className="mt-3">{dt}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
