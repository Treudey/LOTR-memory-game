import React from "react";
import "./style.css";

function Header() {
  return (
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-2">Lord of the Rings</h1>
        <h2 class="display-3">Memory Game</h2>
        <p class="lead">Click on a character to earn points, but don't click on someone more than once!</p>
      </div>
    </div>
  );
}

export default Header;