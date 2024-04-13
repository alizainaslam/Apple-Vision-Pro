import React from "react";
import OuterNav from "./navbar/OuterNav";
import InnerNav from "./navbar/InnerNav";
import HeroText from "./herotext/HeroText";

const Header = () => {
  return (
    <>
      <div className="header relative bg-black w-full">
        <OuterNav />
        <InnerNav />
        <HeroText />
      </div>
    </>
  );
};

export default Header;
