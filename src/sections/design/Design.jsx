import React from "react";
import Button from "../../components/Button";

function Design() {
  return (
    <div className="desgin px-6 flex flex-col gap-3 py-24 items-center justify-center ">
      <h3 className="text-xl font-semibold">Design</h3>
      <h2 className="text-2xl font-semibold">Designed by Apple.</h2>
      <p className=" opacity-50 leading-5 mt-1 font-semibold text-center">
        Apple Vision Pro is the result of decades of experience designing
        high‑performance, mobile, and wearable devices — culminating in the most
        ambitious product Apple has ever created. Apple Vision Pro integrates
        incredibly advanced technology into an elegant, compact form, resulting
        in an amazing experience every time you put it on.
      </p>

      <div className="explain flex flex-col justify-center items-center gap-8 mt-8 leading-5 ">
        <p className="opacity-100 font-semibold">
          Front.{" "}
          <span className="opacity-50">
            A singular piece of three-dimensionally formed laminated glass flows
            into an aluminum alloy frame that curves to wrap around your face.
          </span>
        </p>
        <p className="opacity-100 font-semibold">
          Light Seal.{" "}
          <span className="opacity-50">
            The Light Seal gently flexes to conform to your face, delivering a
            precise fit while blocking out stray light.
          </span>
        </p>{" "}
        <p className="opacity-100 font-semibold">
          Head bands.{" "}
          <span className="opacity-50">
            The Solo Knit Band provides cushioning, breathability, and stretch,
            and a Fit Dial lets you adjust Apple Vision Pro precisely to your
            head. The Dual Loop Band offers an additional option for a
            personalized fit.
          </span>
        </p>
      </div>

      <div className="design-images flex flex-col gap-4 mt-16">
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/design/glass_top__k3b8lzqd1l2m_small.jpg"
          alt=""
        />
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/design/glass_side__gm4agomrwl2e_small.jpg"
          alt=""
        />
      </div>

      <div className="design-bottom-container mt-16">
        <p className=" font-semibold text-black">
          <span className="opacity-50">A singular piece </span>of
          three-dimensionally formed laminated glass{" "}
          <span className="opacity-50">
            acts as an optical surface for the cameras and sensors that view the
            world. It flows seamlessly into a
          </span>{" "}
          custom aluminum alloy frame{" "}
          <span className="opacity-50">
            that gently curves to wrap around your face while serving as an
            attachment point for the
          </span>{" "}
          Light Seal.
        </p>
      </div>

      <div className="relative mt-16 flex flex-col">
        <img
          src="https://www.apple.com/v/apple-vision-pro/c/images/overview/design/light_seal__fo87cv0zkcmm_small.jpg"
          alt=""
          className="h-64 w-96 "
        />
        <Button
          btnText={`+ Learn more about design`}
          style="py-2 px-2 font-normal bg-orange-600 text-white rounded-3xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-2/1 text-sm z-10 w-52"
        />
      </div>
    </div>
  );
}

export default Design;
