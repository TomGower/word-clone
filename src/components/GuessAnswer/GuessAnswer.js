import React from "react";

function GuessAnswer({ addGuess, isGameOver }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length < 5) return;
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess.toLocaleUpperCase()} onChange={e => {setGuess(e.target.value)}} disabled={isGameOver} />
    </form>
  );
}

export default GuessAnswer;
