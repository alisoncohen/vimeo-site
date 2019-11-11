import React from 'react';
import classNames from 'classnames';
import CarouselSlide from './carousel_slide';
import './carousel.scss';
import { ReactComponent as NextImg } from './assets/next.svg';
import { ReactComponent as PrevImg } from './assets/back.svg';
import huntForTheWilderpeopleImg from './assets/hunt_for_the_wilderpeople.jpg';
import nichtsPassiertImg from './assets/nichts_passiert.jpg';

let slides = [
  {
    title: 'Hunt for the Wilderpeople',
    description:
      'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In the Shadows',
    image: huntForTheWilderpeopleImg,
    color: '#50B4E8',
  },
  {
    title: 'Nichts Passiert / A Decent Man',
    description:
      'A swiss family takes a ski vacation and runs into trouble when the father, a titular decent man, finds himself in a series of moral quandries.',
    image: nichtsPassiertImg,
    color: '#4FA0E1',
  },
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
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
      <div className="carousel">
        <PrevImg onClick={this.prev} className="arrow" />
        <CarouselSlide slideInfo={slides[this.state.currentIndex]} />
        <NextImg onClick={this.next} className="arrow" />
      </div>
    );
  }
}

export default Carousel;
