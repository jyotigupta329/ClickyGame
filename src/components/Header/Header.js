import React from "react";
import "./Header.css";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

const Header = props => (

  <div className="row headercolor">
    <div className="col-9">
      <h4>Clickey Game</h4>
    </div>
    <div className="col-1">
      <p>Score: {props.score}</p>
    </div>
    <div className="col-2">
      <p>Heighest Score : {props.highestScore}</p>
    </div>
  </div>

)


export default Header;