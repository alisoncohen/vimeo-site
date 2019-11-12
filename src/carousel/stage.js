import React from 'react';
import CarouselSlide from './carousel_slide';

export const SlidePosition = {
  onStage: 'onStage',
  offStageLeft: 'offStageLeft',
  offStageRight: 'offStageRight',
};

export default class Stage extends React.Component {
  calcPosition() {
    const { index, currentIndex, slides } = this.props;
    if (index === currentIndex) return SlidePosition.onStage;
    if (index === 0 && currentIndex === slides.length - 1)
      return SlidePosition.offStageRight;
    if (index === slides.length - 1 && currentIndex === 0)
      return SlidePosition.offStageLeft;
    return index < currentIndex
      ? SlidePosition.offStageLeft
      : SlidePosition.offStageRight;
  }
  render() {
    const { slides, currentIndex } = this.props;
    return (
      <div className="stage">
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            slideInfo={slide}
            position={
              index === currentIndex
                ? SlidePosition.onStage
                : index < currentIndex
                ? SlidePosition.offStageLeft
                : SlidePosition.offStageRight
            }
          />
        ))}
      </div>
    );
  }
}
