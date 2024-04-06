import React from "react";

// Icons
import { FaApple } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="heroText absolute bottom-16 flex flex-col items-center justify-center w-full">
      <h1 className="heroText-heading flex items-center">
        <span>
          <FaApple className="h-auto" />
        </span>{" "}
        Vision Pro
      </h1>
      <p className="text-orange-600 pl-3">Watch Our Videos{">"}</p>
    </div>
  );
};

export default HeroText;
