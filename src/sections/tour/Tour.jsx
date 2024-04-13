import React from "react";
import Button from "../../components/Button";
import { FaPlay } from "react-icons/fa";
import Logo from "../../components/Logo";

const Tour = () => {
  return (
    <>
      <div className="h-auto flex items-center flex-col gap-2 pb-24 pr-4 pl-4">
        <div className="logo">
          <Logo />
        </div>
        <div className="flex h-auto items-center gap-1 text-orange-600 font-semibold">
          <Button btnText={`Watch the film`} /> <FaPlay />
        </div>
        <div className="flex h-auto items-center gap-1 text-orange-600 font-semibold">
          <Button btnText={`Watch the guided Tour`} /> {">"}
        </div>
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/intro/hardware_base__ecl2v43j73o2_large.jpg"
          alt="Apple vision pro side view"
          className="h-auto w-full mt-20 mb-20"
        />
        <div className="flex h-auto items-center gap-1 font-normal border-solid border-2 border-black rounded-3xl hover:text-white hover:bg-black">
          <Button
            btnText={`+ Take a closer look`}
            style="pt-2 pb-2 pl-4 pr-4"
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
