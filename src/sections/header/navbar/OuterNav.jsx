import React, { useState } from "react";

// Components
import List from "../../../components/List";
import SearchNav from "./search/SearchNav";

// Icons
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const OuterNav = () => {
  const navIcons = [<CiSearch />, <IoBag />, <HiOutlineMenuAlt4 />];

  const [searchNavItem, setSearchNavItem] = useState(false);

  const handleClick = (index) => {
    if (index === 0) {
      setSearchNavItem((prev) => !prev);
    }
  };

  return (
    <>
      <div className="outerNav">
        {/* Icon as apple logo */}
        <div className="logo hover:text-primaryColor cursor-pointer">
          <FaApple className="h-8" />
        </div>

        {/* Nav Bar Icons as a props to List component */}
        <nav className="navIcon">
          <List listItems={navIcons} onClick={handleClick} />
        </nav>
      </div>
      {searchNavItem && <SearchNav />}
    </>
  );
};

export default OuterNav;
