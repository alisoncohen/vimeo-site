import React from "react";
import sections from "./section_content";
import ContentSection from "./content_section.js";
import "./first_part.scss";

const FirstPart = props => (
  <div className="firstSection">
    <div className="light_section">
      {sections.lightSections.map(section => (
        <ContentSection section={section} key={section.title} />
      ))}
    </div>
    <div className="dark_section">
      {sections.darkSections.map(section => (
        <ContentSection section={section} key={section.title} />
      ))}
    </div>
  </div>
);

export default FirstPart;
