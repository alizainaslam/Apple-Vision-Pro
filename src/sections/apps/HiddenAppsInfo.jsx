import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { IoClose } from "react-icons/io5";

const HiddenAppsInfo = () => {
  const additionalInfo = useRef(null);
  const image = useRef(null);

  useGSAP(() => {
    gsap.to(additionalInfo.current, {
      height: "100vh",
      duration: 0.6,
    });
  }, []);
  const closeSearchNav = () => {
    gsap.to(additionalInfo.current, {
      height: 0,
      duration: 0.5,
      onComplete: () => {
        additionalInfo.current.style.display = "none";
      },
    });
    gsap.to(".image", {
      height: 0,
      duration: 0.3,
      top: 0,
    });
  };
  return (
    <div
      className="bg-black px-6 mt-20 w-full text-white flex flex-col additionalInfo"
      ref={additionalInfo}
    >
      <div className="icon py-5">
        <IoClose onClick={closeSearchNav} />
      </div>
      <img
        src="https://www.apple.com/v/apple-vision-pro/c/images/overview/experiences/apps/drawer/apps_selection__d5oucgbrc5me_small.jpg"
        alt=""
        className="py-4 image"
        style={{ borderRadius: "10%" }}
        ref={image}
      />
      <p className="opacity-90 font-semibold pt-2">
        Apple Vision Pro has the familiar apps you know and love — transformed
        to live in your space. Like Safari, Photos, Music, and Messages. And
        with iCloud, your content is automatically synced with your iPhone,
        iPad, and Mac.
      </p>
    </div>
  );
};

export default HiddenAppsInfo;
