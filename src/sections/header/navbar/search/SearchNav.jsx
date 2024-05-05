import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(useGSAP);

const SearchNav = () => {
  const searchNav = useRef(null);
  const menuItems = useRef(null);

  useGSAP(() => {
    gsap.to(".searchNav", {
      height: "100%",
      duration: 0.6,
      bottom: 0,
      position: "fixed",
    });
    gsap.from(".menuItems", { opacity: 0, duration: 2.3 });
    document.body.style.overflow = "hidden";
  }, []);

  const closeSearchNav = () => {
    gsap.to(searchNav.current, {
      height: 0,
      top: "-100%",
      duration: 1.5,
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
  };

  return (
    <div
      className="searchNav h-0 w-full bg-black text-white fixed z-10 top-0 bottom-0 "
      ref={searchNav}
    >
      <button onClick={closeSearchNav} className=" pt-4 pb-3 px-6">
        <IoClose className="h-8" />
      </button>

      <div className="mx-6 menuItems disabled:" ref={menuItems}>
        <input
          type="text"
          placeholder="Search"
          className=" bg-inherit border-none focus:border-none mb-7 text-2xl font-semibold"
          maxLength={6}
          style={{ outline: "none", width: "70%" }}
        />
        <p className="opacity-45 mb-3 ">Quick Links</p>
        <ul className="font-semibold opacity-70 ml-2 flex flex-col gap-2">
          <li> Find a Store</li>
          <li>Apple Vision Pro</li>
          <li> Find a Store</li>
          <li>Apple Vision Pro</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchNav;
