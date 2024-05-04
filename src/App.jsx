import React from "react";
import "./App.css";
import Header from "./sections/header/Header";
import Foundation from "./sections/foundation/Foundation";
import Tour from "./sections/tour/Tour";
import Apps from "./sections/apps/Apps";
import Design from "./sections/design/Design";
import ImageGallery from "./sections/img-gallery/ImageGallery";
import Technology from "./sections/technology/Technology";
import Footer from "./sections/footer/Footer";
import VrSection from "./sections/vrsection/VrSection";

const App = () => {
  return (
    <>
      <Header />
      <Foundation />
      <Tour />
      <Apps />
      <Design />
      <ImageGallery />
      <Technology />
      <VrSection />
      <Footer />
    </>
  );
};

export default App;
