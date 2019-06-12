import React from "react";
import "./style.css";

function CharacterTile(props) {

  return (
    <div className="char-tile col-6 col-md-4 col-lg-3">
      <img 
        id={props.id} 
        src={props.url} 
        alt={props.name} 
        class="img-thumbnail" 
        onClick={() => props.handleGuess(props.id)}
      >

      </img>
    </div>
  );
}

export default CharacterTile;
