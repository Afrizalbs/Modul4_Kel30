import React, { useState } from "react";
import logo from "../logo.svg";
import "./Counter.css";

const LearnUseState = () => {
  const [showImage, setShowImage] = useState(true);
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const hideImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="Main">
      <p className="titleState">Counter up adn down with useState</p>
      <p>Kelompok 30</p>

      <div className="ViewImage">
        <div className="ViewImage1">
          <img
            className="App-logo"
            style={{ display: showImage === true ? "flex" : "none" }}
            src={logo}
            alt="logo"
          />
        </div>
        <button className="buttonState" onClick={hideImage}>
          {showImage !== true ? "show" : "hide"}
        </button>
      </div>
      <p className="textCount">{count}</p>
      <div className="ViewButton">
        <button className="buttonState" onClick={countUp}>
          Up ⬆
        </button>

        <button className="buttonState" onClick={countDown}>
          Down ⬇
        </button>
      </div>
    </div>
  );
};
export default LearnUseState;
