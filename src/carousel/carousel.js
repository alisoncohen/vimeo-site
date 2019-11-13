import React from "react";
import Stage from "./stage";
import "./carousel.scss";
import { ReactComponent as NextImg } from "../assets/next.svg";
import { ReactComponent as PrevImg } from "../assets/back.svg";
import classNames from "classnames";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.boundNext = this.next.bind(this);
    this.boundPrev = this.prev.bind(this);
  }

  prev() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    const index = (currentIndex - 1) % slides.length;
    this.setState({ currentIndex: index });
  }

  next() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    const index = (currentIndex + 1) % slides.length;
    this.setState({ currentIndex: index });
  }

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    return (
      <div
        className="carousel"
        style={{ background: slides[currentIndex].image }}
      >
        <PrevImg
          onClick={this.boundPrev}
          className={classNames("arrow", "prev_arrow")}
        />
        <NextImg
          onClick={this.boundNext}
          className={classNames("arrow", "next_arrow")}
        />
        <Stage slides={slides} currentIndex={currentIndex} />
      </div>
    );
  }
}
