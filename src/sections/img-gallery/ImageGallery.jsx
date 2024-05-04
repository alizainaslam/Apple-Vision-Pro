import React, { useState } from "react";

const ImageGallery = () => {
  const [img, setImg] = useState(
    "https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/spatial_interaction__br11mf88bzxy_small.jpg"
  );

  const handleImageGallery = () => {
    setImg(
      img ===
        "https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/spatial_interaction__br11mf88bzxy_small.jpg"
        ? "https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/scaling_ui__gosi0305um2y_small.jpg"
        : "https://www.apple.com/v/apple-vision-pro/c/images/overview/visionos/spatial_interaction__br11mf88bzxy_small.jpg"
    );
  };

  return (
    <div className="img-gallery w-full flex items-center justify-center mb-24">
      <div className="bg-image"></div>
      <img
        src={img}
        alt=""
        className="img-content"
        onTouchStart={handleImageGallery}
      />
    </div>
  );
};

export default ImageGallery;
