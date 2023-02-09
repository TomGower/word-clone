import React from "react";

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

// const COLOR_KEY = [
//   { 'backgroundColor': 'gainsboro', color: 'black' },
//   { 'backgroundColor': 'black', color: 'white' },
//   { 'backgroundColor': 'goldenrod', color: 'white' },
//   { 'backgroundColor': 'green', color: 'white' }
// ]
const COLOR_KEY = ['unguessed', 'incorrect', 'misplaced', 'correct'];

function Keyboard({ guessColors }) {
  return (
    <div className="keyboard-wrapper">
    {KEYBOARD_ROWS.map(row => <KeyboardRow guessColors={guessColors} letters={row} key={row.join('~')} />)}
    </div>
  )
}

function KeyboardRow({ guessColors, letters }) {
  return (
    <div className="keyboard-row">
      {letters.map(letter => <Letter guessColors={guessColors} letter={letter.toUpperCase()} key={letter} />)}
    </div>
  )
}

function Letter({ guessColors, letter }) {
  return (
    <span className={`letter ${COLOR_KEY[guessColors[letter]]}`}>{letter.toUpperCase()}</span>
  )
}

export default Keyboard;
