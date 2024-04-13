import React from "react";

// Icons
import { FaApple } from "react-icons/fa";
const Logo = () => {
  return (
    <>
      <h1 className="heroText-heading flex items-center">
        <span>
          <FaApple className="h-auto" />
        </span>{" "}
        Vision Pro
      </h1>
    </>
  );
};

export default Logo;
