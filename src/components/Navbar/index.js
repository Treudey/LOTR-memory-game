import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item page-title">
        <p>LOTR Memory Game</p>
      </li>
      <li className="nav-item">
        <p>{props.message}</p>
      </li>
      <li className="nav-item">
        <p>Score: {props.score} | Top Score: {props.topScore}</p>
      </li>
    </ul>
  );
}

export default Navbar;


