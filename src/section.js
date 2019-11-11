import React from 'react';
import classNames from 'classnames';

const Section = props =>
  props.section.isTextOnRight ? (
    <div className="section">
      <img
        src={props.section.image}
        className={classNames('left_section', 'left_image')}
      ></img>
      <div className={classNames('right_text_section', 'right_section')}>
        <h1>{props.section.title}</h1>
        <p>{props.section.text}</p>
      </div>
    </div>
  ) : (
    <div className="section">
      <div className={classNames('left_text_section', 'left_section')}>
        <h1>{props.section.title}</h1>
        <p>{props.section.text}</p>
      </div>
      <img src={props.section.image} className={'right_section'}></img>
    </div>
  );

export default Section;
