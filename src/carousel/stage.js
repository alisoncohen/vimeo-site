import React from "react";
import CarouselSlide from "./carousel_slide";

function calcPosition(index, currentIndex) {
  return index === currentIndex
    ? "on_stage"
    : index < currentIndex
    ? "off_stage_left"
    : "off_stage_right";
}

export default function Stage({ slides, currentIndex }) {
  return (
    <div className="stage">
      {slides.map((slide, index) => (
        <CarouselSlide
          key={index}
          slideInfo={slide}
          position={calcPosition(index, currentIndex)}
        />
      ))}
    </div>
  );
}
