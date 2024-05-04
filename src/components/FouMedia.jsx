import React, { useRef, useState } from "react";

// Icons
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";

const FouMedia = ({ video }) => {
  const [playing, setPlaying] = useState(true);

  const videoHandle = useRef(null);

  const togglePlay = () => {
    const video = videoHandle.current;
    if (video) {
      if (playing) {
        video.pause();
      } else {
        video.play();
      }
      setPlaying(!playing);
    }
  };
  return (
    <>
      <div className="h-full mb-6 w-full relative ">
        <button onClick={togglePlay} className="absolute right-5 top-5 z-10">
          {playing ? (
            <IoIosPause className="text-white" />
          ) : (
            <FaPlay className="text-white w-3" />
          )}
        </button>
        <video
          ref={videoHandle}
          className="h-full w-full"
          src={video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
};

export default FouMedia;
