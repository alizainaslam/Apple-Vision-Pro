import React, { useState } from "react";

const SearchNav = () => {
  const [closeNav, setCloseNav] = useState(false);

  const handleClick = () => {
    setCloseNav(true);
  };
  return (
    <>
      <div
        className={`${
          closeNav ? "hidden" : "block"
        } navContainer min-h-full w-full bg-white text-black absolute z-10 top-0`}
      >
        <button onClick={handleClick}>close</button>
      </div>
    </>
  );
};

export default SearchNav;
