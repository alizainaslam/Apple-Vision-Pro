import React from "react";
import Button from "../../components/Button";

const Technology = () => {
  return (
    <div className="mt-16 bg-black text-white flex flex-col gap-3 items-center px-6 py-16 text-center">
      <h3 className="font-bold text-xl">Technology</h3>
      <h1 className="font-extrabold text-2xl ">
        Innovation you can see, hear, and feel.
      </h1>
      <p className=" text-md font-semibold leading-5">
        Pushing boundaries from the inside out.{" "}
        <span className="opacity-50">
          Spatial experiences on Apple Vision Pro are only possible through
          groundbreaking Apple technology. Displays the size of a postage stamp
          that deliver more pixels than a 4K TV to each eye. Incredible advances
          in Spatial Audio. A revolutionary dual‑chip design featuring custom
          Apple silicon. A sophisticated array of cameras and sensors. All the
          elements work together to create an unprecedented experience you have
          to see to believe.
        </span>
      </p>
      <img
        src="https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/displays/hero_base__bpxhq09r962u_small.jpg"
        alt=""
        className="pt-12"
      />
      <h3 className="font-bold text-xl pt-10 text-left">
        More pixels than a 4K TV. For each eye.
      </h3>
      <p className=" text-md leading-5 font-semibold text-left">
        The custom micro‑OLED display system{" "}
        <span className="opacity-50">
          features 23 million pixels, delivering stunning resolution and colors.
          And a specially designed three‑element lens creates the feeling of a
          display that’s everywhere you look.
        </span>
      </p>
      <img
        src="https://www.apple.com/v/apple-vision-pro/c/images/overview/technology/spatial_audio_base__d8zvuse3yu4i_small.jpg"
        alt=""
        className="pt-10"
      />
      <Button
        btnText={`+ Learn more about design`}
        style="py-3 px-2 mt-5 font-semibold bg-white text-black rounded-3xl 
          text-sm w-56"
      />{" "}
    </div>
  );
};

export default Technology;
