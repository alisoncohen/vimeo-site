import React from 'react';
import classNames from 'classnames';
import { ReactComponent as PlayButton } from './assets/playbutton.svg';

const CarouselSlide = ({ slideInfo }) => (
  <div className="slide">
    <div className="bg"></div>
    <img src={slideInfo.image} className="main_img" />
    <div className="text">
      <h1>{slideInfo.title}</h1>
      <p className="description">{slideInfo.description}</p>
      <div className="buttons">
        <button
          type="button"
          className="buy_now_btn"
          style={{ backgroundColor: slideInfo.color }}
        >
          <div>
            <PlayButton className="play_button_icon" />
          </div>
          Buy Now
        </button>
        <button type="button" className="watch_trailer_btn">
          Watch Trailer
        </button>
      </div>
    </div>
  </div>
);

export default CarouselSlide;
