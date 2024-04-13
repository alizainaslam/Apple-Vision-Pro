import React from "react";
import Logo from "../../../components/Logo";

const HeroText = () => {
  return (
    <div className="heroText absolute bottom-16 flex flex-col items-center justify-center w-full">
      <Logo />
      <p className="text-orange-600 pl-3">Watch Our Videos{">"}</p>
    </div>
  );
};

export default HeroText;
