import React from "react";
import FirstPart from "./first_part/first_part.js";
import Carousel from "./carousel/carousel.js";
import slides from "./carousel/slides_info.js";
import DataFetcher from "./carousel/data_fetcher.js";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FirstPart />
        <Carousel slides={slides} />
        <DataFetcher>{slides => <Carousel slides={slides} />}</DataFetcher>
      </div>
    );
  }
}
