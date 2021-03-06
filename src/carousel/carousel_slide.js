import React from "react";
import classNames from "classnames";
import { ReactComponent as PlayButton } from "../assets/playbutton.svg";
import "./slide.scss";

export default class CarouselSlide extends React.Component {
  calcDescription() {
    const { description } = this.props.slideInfo;
    return description.length > 400
      ? description.substring(0, 400) + "..."
      : description;
  }

  renderInfo() {
    const { image, title, color, buyLink, trailerLink } = this.props.slideInfo;
    return (
      <div className="info">
        <img
          src={image}
          className="main_img"
          alt={`Movie poster for ${title}`}
        />
        <div className="text_container">
          <div className="text">
            <h1>{title}</h1>
            <p className="description">{this.calcDescription()}</p>
            <div className="buttons">
              <a href={buyLink ? buyLink : null}>
                <button
                  type="button"
                  className="buy_now_btn"
                  style={{ backgroundColor: color }}
                >
                  <PlayButton className="play_button_icon" />
                  Buy Now
                </button>
              </a>
              <a href={trailerLink ? trailerLink : buyLink ? buyLink : null}>
                <button type="button" className="watch_trailer_btn">
                  Watch Trailer
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBackground() {
    const { image, color, secondaryColor } = this.props.slideInfo;
    return (
      <div className="background">
        <div
          className="background_image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div
          className="tint"
          style={{ backgroundColor: secondaryColor ? secondaryColor : color }}
        />
        <div className="darken" />
      </div>
    );
  }

  render() {
    const { position } = this.props;
    const className = classNames("slide", position);
    return (
      <div className={className}>
        {this.renderBackground()}
        {this.renderInfo()}
      </div>
    );
  }
}
