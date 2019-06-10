import React from "react";
import "./style.css";

function CharacterTile(props) {

  return (
    <img id={props.id} src={props.url} alt={props.name} class="img-thumbnail"></img>
  );
}

export default CharacterTile;
