import React from "react";
import "./Foundation.css";
import FouMedia from "../../components/FouMedia";
import Typogr from "../../components/FouTypogr";

const Foundation = () => {
  const headingText = [
    "Welcome to the era of spatial computing.",
    "Apple Vision Pro seamlessly blends digital content with your physical space.",
    "You navigate simply by using your eyes, hands, and voice.",
    "So you can do the things you love in ways never before possible.",
    "You’ve never seen everything like this before.",
  ];

  const media = [
    "https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4",
    "https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4",
    "https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4",
    "https://www.apple.com//105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/glass/large_2x.mp4",
  ];
  return (
    <>
      <div className="h-auto flex items-center flex-col gap-10 pt-14 pb-24">
        <Typogr text={headingText[0]} />
        <FouMedia video={media[0]} />
        <Typogr text={headingText[1]} />
        <FouMedia video={media[1]} />
        <Typogr text={headingText[2]} />
        <FouMedia video={media[2]} />
        <Typogr text={headingText[3]} />
        <FouMedia video={media[3]} />
        <Typogr text={headingText[4]} />
      </div>
    </>
  );
};

export default Foundation;
