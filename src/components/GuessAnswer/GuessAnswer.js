import React from "react";

function GuessAnswer({ addGuess, isGameOver }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (guess.length !== 5) return; // putting 'required', 'minLength', 'maxLength' on input obviates need for this
    // but combination of toUpperCase() and minLength() can result in weird bugs, so better solution for Josh's answer is to use pattern and title instead of minLength/maxLength
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} >
      <label htmlFor="guess-input">Enter guess:</label>
      <input required pattern="[a-zA-Z]{5}" title="5 letter word" id="guess-input" type="text" value={guess.toLocaleUpperCase()} onChange={e => {setGuess(e.target.value)}} disabled={isGameOver} />
    </form>
  );
}

export default GuessAnswer;
