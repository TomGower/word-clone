import React from "react";
import { checkGuess } from "../../game-helpers";
import DisplayCharacter from '../DisplayCharacter';

function GuessResult({ guess, answer }) {
  let chars = checkGuess(guess, answer);
  if (!chars) {
    chars = new Array(5).fill().map(c => ({ letter: '', status: '', id: Math.random() }));
  } else {
    while (chars.length < 5) chars.push({ letter: '', status: '' });
    chars = chars.map((c) => ({...c, id: Math.random() }));
  }

  return (
    <p className="guess">
      {chars.map(({letter, status, id}) => <DisplayCharacter key={id} letter={letter} status={status} />)}
    </p>
  );
}

export default GuessResult;
