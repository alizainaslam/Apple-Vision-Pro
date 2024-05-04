import React from "react";

const VrSection = () => {
  return (
    <div className="w-full mt-24 flex justify-center items-center">
      <div className="w-96 mx-4 px-4 max-w-96 bg-gray-100 flex items-center flex-col">
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/ar_logo__bmtaba6ckk76_small.png"
          alt=""
          className="my-5"
        />
        <h3 className="font-semibold text-2xl text-center mb-3">
          Use AR to view Apple Vision Pro.{" "}
        </h3>
        <p className=" text-md leading-5 font-semibold text-center opacity-50 mb-8">
          Open this page using Safari on your iPhone or iPad.
        </p>
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/routers/ar_tile__que64jqs2t2e_small.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default VrSection;
