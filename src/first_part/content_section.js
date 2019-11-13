import React from "react";
import classNames from "classnames";

export default function ContentSection({ section }) {
  const { title, text, image, isTextOnRight } = section;

  return isTextOnRight ? (
    <div className="section">
      <img
        src={image}
        alt={`${title}`}
        className={classNames("left_section", "left_image")}
      ></img>
      <div className={classNames("right_text_section", "right_section")}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="section">
      <div className={classNames("left_text_section", "left_section")}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={image} alt={`${title}`} className={"right_section"}></img>
    </div>
  );
}
