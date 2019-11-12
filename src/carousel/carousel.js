import React from 'react';
import Stage from './stage';
import './carousel.scss';
import { ReactComponent as NextImg } from '../assets/next.svg';
import { ReactComponent as PrevImg } from '../assets/back.svg';
import classNames from 'classnames';
import slides from './slides_info';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.boundNext = this.next.bind(this);
    this.boundPrev = this.prev.bind(this);
  }

  prev() {
    const lastIndex = slides.length - 1;
    const { currentIndex } = this.state;
    const index = currentIndex === 0 ? lastIndex : currentIndex - 1;
    this.setState({ currentIndex: index });
  }

  next() {
    const lastIndex = slides.length - 1;
    const { currentIndex } = this.state;
    const index = currentIndex === lastIndex ? 0 : currentIndex + 1;
    this.setState({ currentIndex: index });
  }

  render() {
    return (
      <div
        className="carousel"
        style={{ background: slides[this.state.currentIndex].image }}
      >
        <PrevImg
          onClick={this.boundPrev}
          className={classNames('arrow', 'prev_arrow')}
        />
        <NextImg
          onClick={this.boundNext}
          className={classNames('arrow', 'next_arrow')}
        />
        <div className="container">
          <Stage slides={slides} currentIndex={this.state.currentIndex} />
        </div>
      </div>
    );
  }
}

export default Carousel;
