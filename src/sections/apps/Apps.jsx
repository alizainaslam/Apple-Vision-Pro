import React, { useState } from "react";
import Typogr from "../../components/FouTypogr";
import FouMedia from "../../components/FouMedia";
import Button from "../../components/Button";
import HiddenAppsInfo from "./HiddenAppsInfo";

const Apps = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const handleClick = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };
  return (
    <div className="h-auto bg-gray-100 flex items-center flex-col gap-1 py-24">
      <h3 className="text-lg font-semibold">Apps</h3>
      <Typogr text={"Free your desktop.And your apps will follow."} />
      <div className="pt-10 w-full">
        <FouMedia
          video={
            "https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
          }
        />
      </div>
      <div className="information px-6 flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Your apps live in your space.</h2>
        <p className=" opacity-50 leading-5 font-semibold">
          With Apple Vision Pro, you have an infinite canvas that transforms how
          you use the apps you love. Arrange apps anywhere and scale them to the
          perfect size, making the workspace of your dreams a reality — all
          while staying present in the world around you. Browse the web in
          Safari, create a to‑do list in Notes, chat in Messages, and seamlessly
          move between them with a glance. You can even bring your Mac workflows
          into Apple Vision Pro wirelessly with Mac Virtual Display.
        </p>
      </div>
      <div className="btnForMoreApps mt-10">
        <Button
          btnText={"+ Learn more about apps"}
          style="pt-2 pb-2 pl-4 pr-4 font-normal text-white bg-orange-600 rounded-3xl"
          onClick={handleClick}
        />
      </div>
      {showAdditionalInfo && <HiddenAppsInfo />}
    </div>
  );
};

export default Apps;
