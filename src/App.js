import React from 'react';
import FirstPart from './first_part/first_part.js';
import Carousel from './carousel/carousel.js';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FirstPart />
        <Carousel />
      </div>
    );
  }
}
