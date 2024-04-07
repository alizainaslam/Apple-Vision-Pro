import React from "react";

// Icons
import { IoIosArrowDown } from "react-icons/io";
const InnerNav = () => {
  return (
    <>
      <div className="innerNav">
        <div className="innerNav-logoText text-sm">Apple Vision Pro</div>
        <nav className="flex gap-4">
          <button title="dropdown menu">
            <IoIosArrowDown />
          </button>
          <button className="bg-blue-700 pl-2 pr-2 text-sm rounded-xl disabled:">
            Buy
          </button>
        </nav>
      </div>
    </>
  );
};

export default InnerNav;
