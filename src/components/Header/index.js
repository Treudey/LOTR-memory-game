import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-2">Lord of the Rings</h1>
        <h2 className="display-3">Memory Game</h2>
        <p className="lead">Click on a character to earn points, but don't click on someone more than once!</p>
      </div>
    </div>
  );
}

export default Header;