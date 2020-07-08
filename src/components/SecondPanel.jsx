import React, { useState, useEffect } from "react";
import "styles/SecondPanel.scss";
import SectionTitle from "components/SectionTitle";

const SecondPanel = () => {
  const [isDesktop, setIsDesktop] = useState(document.body.clientWidth > 900);
  const [polygonAngle, setPolygonAngle] = useState(isDesktop ? 2 : 2);
  const [polygonPoints, setPolygonPoints] = useState(
    "0," + polygonAngle + " 100,0 100,100 50,110 0,100"
  );

  const updateBackground = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  const updatePolygonAngle = () => {
    let angle;
    if (window.innerWidth > 1200) {
      angle = 20;
    } else if (window.innerWidth > 900) {
      angle = 12;
    } else if (window.innerWidth > 400) {
      angle = 9;
    } else if (window.innerWidth > 300) {
      angle = 7;
    } else {
      angle = 10;
    }
    setPolygonAngle(angle);
  };

  const updatePolygonPoints = () => {
    setPolygonPoints("0," + polygonAngle + " 100,0 100,100 50,110 0,100");
  };

  useEffect(() => {
    updateBackground();
    updatePolygonAngle();
    updatePolygonPoints();
  });

  useEffect(() => {
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  });

  useEffect(() => {
    window.addEventListener("resize", updatePolygonAngle);
    return () => window.removeEventListener("resize", updatePolygonAngle);
  });

  useEffect(() => {
    window.addEventListener("resize", updatePolygonPoints);
    return () => window.removeEventListener("resize", updatePolygonPoints);
  });

  return (
    <div className="SecondPanel">
      <div className="mySVG">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 110"
          preserveAspectRatio="none"
        >
          <polygon points={polygonPoints} />
        </svg>
      </div>
      <div className="content">
        <SectionTitle text="PROJECTS" />
        <div className="projectList">
          <div className="projectPanel">AAAAAA</div>
          <div className="projectPanel">BBBBBB</div>
          <div className="projectPanel">CCCCCC</div>
        </div>
      </div>
    </div>
  );
};

export default SecondPanel;
