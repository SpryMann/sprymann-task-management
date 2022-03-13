import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <p className="banner__suptitle">Today</p>
      <h2 className="banner__title">2/10 tasks</h2>
    </div>
  );
};

export default Banner;
