import React from 'react';
import classNames from 'classnames';
import { ReactComponent as PlayButton } from '../assets/playbutton.svg';
import './slide.scss';

export default class CarouselSlide extends React.Component {
  renderInfo() {
    const { slideInfo } = this.props;
    return (
      <div className="info">
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
  }

  renderBackground() {
    const { slideInfo } = this.props;
    return (
      <div className="background">
        <div
          className="background_image"
          style={{ backgroundImage: `url(${slideInfo.image})` }}
        />
        <div className="tint" style={{ backgroundColor: slideInfo.color }} />
        {slideInfo.darken ? <div className="darken" /> : null}
      </div>
    );
  }

  render() {
    const { position } = this.props;
    console.log(position);
    const className = classNames(
      'slide',
      { ['off_stage_left']: position === 'offStageLeft' },
      { ['off_stage_right']: position === 'offStageRight' },
      { ['on_stage']: position === 'onStage' }
    );
    return (
      <div className={className}>
        {this.renderBackground()}
        {this.renderInfo()}
      </div>
    );
  }
}
