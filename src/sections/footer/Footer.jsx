import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const menu = ["Shop and Learn", "Apple Wallet", "Account", "Entertainment"];
  const subMenuForShopAndLearn = ["Store", "Mac", "iPad", "iPhone"];
  const subMenuForAppleWallet = ["Wallet", "Apple Card", "Apple Pay"];
  const subMenuForAccount = [
    "Manage Your Apple ID",
    "Apple Store Account",
    "iCloud.com",
  ];
  const subMenuForEntertainment = ["Apple One", "Apple TV+", "App Store"];
  const [activeItem, setActiveItem] = useState(null);
  const [menuItem, setMenuItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
    if (setActiveItem) {
      const menuNames = [
        subMenuForShopAndLearn,
        subMenuForAppleWallet,
        subMenuForAccount,
        subMenuForEntertainment,
      ];
      if (index >= 0 && index < menuNames.length) {
        setMenuItem(menuNames[index]);
      }
    }
  };
  return (
    <footer className="footer mt-24 bg-gray-100 pb-4 px-6 pt-6">
      <p className="footer-border footer-text">
        Testing conducted by Apple in November 2023 using preproduction Apple
        Vision Pro units and software. Testing consisted of full battery
        discharge while performing each of the following tasks: video playback,
        internet browsing, spatial video capture, and FaceTime. Video playback
        tested in conjunction with an Environment, using 2D movie content
        purchased from the Apple TV app. Internet browsing tested using 20
        popular websites. FaceTime tested between two Apple Vision Pro units
        with Personas enabled. Tested with Wi-Fi associated to a network.
        Battery life depends on device settings, usage, network, environmental
        conditions, and many other factors. Battery tests are conducted using
        specific Apple Vision Pro units; actual results may vary.
      </p>
      <h1 className="footer-border heroText-heading text-sm pt-3 pb-3 gap-1 flex items-center">
        <span>
          <FaApple className="h-auto" />
        </span>{" "}
        {">"}
        <span></span>
        Apple Vision Pro
      </h1>

      <div>
        <menu>
          <ul className="">
            {menu.map((item, index) => {
              return (
                <li
                  key={index}
                  className="footer-border py-2"
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center">
                    {item}
                    <IoIosArrowDown />
                  </div>
                  <div
                    className={`${
                      activeItem !== index ? "hidden" : "block"
                    } pt-1`}
                  >
                    <ul className="flex flex-col">
                      {menuItem &&
                        menuItem.map((item, index) => {
                          return (
                            <li key={index} className="pl-1 py-1">
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </menu>
      </div>
      <p className="py-4">
        More ways to shop: Find an Apple Store or other retailer near you. Or
        call 1-800-MY-APPLE.
      </p>
      <p className="pb-4">United States</p>
      <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
      <p className="pt-1">
        Privacy Policy | Terms of Use | Sales and Refunds | Legal Site Map
      </p>
    </footer>
  );
};

export default Footer;
