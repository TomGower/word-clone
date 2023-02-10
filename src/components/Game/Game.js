import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
// import { checkGuess } from '../../game-helpers';
import GuessAnswer from '../GuessAnswer';
import GuessResult from '../GuessResult';
import GameOver from '../GameOver';
import { NUM_OF_GUESSES_ALLOWED, COLORS } from '../../constants';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(range(0, NUM_OF_GUESSES_ALLOWED).fill().map((_, i) => ({ guess: '', count: i + 1})));
  const [count, setCount] = React.useState(0);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [guessColors, setGuessColors] = React.useState(COLORS);
  const [answer, setAnswer] = React.useState('');

  React.useEffect(() => {
    setAnswer(sample(WORDS))
  }, []);

  function resetGame() {
    setGuesses(range(0, NUM_OF_GUESSES_ALLOWED).fill().map((_, i) => ({ guess: '', count: i + 1})));
    setCount(0);
    setIsGameWon(false);
    setGuessColors(COLORS);
    setAnswer(sample(WORDS));
  }

  function addGuess(guess) {
    const newGuess = {
      guess,
      count: count + 1
    };
    const nextGuesses = [...guesses];
    nextGuesses.splice(count, 1, newGuess);
    setGuesses(nextGuesses);
    setCount(count + 1);
    const nextColors = { ...guessColors };
    for (let i = 0; i < guess.length; i++) {
      const curr = guess[i].toUpperCase();
      if (curr === answer[i]) {
        nextColors[curr] = 3;
      } else if (answer.includes(curr)) {
        nextColors[curr] = Math.max(nextColors[curr], 2);
      } else {
        nextColors[curr] = 1;
      }
    }
    setGuessColors(nextColors);
    // const didWin = checkGuess(guess, answer)?.filter(c => c.status === 'correct').length === 5;
    const didWin = guess.toUpperCase() === answer; // this is way simpler than the above
    if (didWin) setIsGameWon(true);
  }

  return (
    <div className="game-wrapper">
      <div className="guess-results">
        {guesses.map((guess) => {
          return <GuessResult key={guess.count} guess={guess.guess} answer={answer} />
          })}
      </div>
      <GuessAnswer addGuess={addGuess} count={count} isGameOver={isGameWon || count === NUM_OF_GUESSES_ALLOWED} />
      {isGameWon ?
        <GameOver count={count} gameStatus={'happy'} reset={resetGame} /> :
        (count === NUM_OF_GUESSES_ALLOWED ?
          <GameOver count={count} gameStatus="sad" answer={answer} reset={resetGame} />
          : ''
        )
      }
      {/* with restructure of GameOver component and 3-level gameStatus prop (won, lost, running), Josh displays win and lose conditions separately with different components and conditionally renders them based on game status (won && WonBanner, lost && wonBanner) */}
      <Keyboard guessColors={guessColors} />
    </div>
  );
}

export default Game;
