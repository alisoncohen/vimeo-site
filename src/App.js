import React from "react";
import FirstPart from "./first_part/first_part.js";
import Carousel from "./carousel/carousel.js";
import slides from "./carousel/slides_info.js";
import CarouselWrapper from "./carousel/carousel_wrapper.js";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FirstPart />
        <Carousel slides={slides} />
        <CarouselWrapper />
      </div>
    );
  }
}
