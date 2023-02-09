import React from "react";

function DisplayCharacter({ letter, status }) {
  return (
    <span className={`cell ${status}`}>
      {letter}
    </span>
  );
}

export default DisplayCharacter;
