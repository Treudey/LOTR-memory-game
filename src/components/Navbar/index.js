import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <h1>LOTR Memory Game</h1>
      </li>
      <li class="nav-item">
        <p>{props.message}</p>
      </li>
      <li class="nav-item">
        <p>Score: {props.score} | Top Score: {props.topScore}</p>
      </li>
    </ul>
  );
}

export default Navbar;


