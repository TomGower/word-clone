import React from "react";

function GameOver({ count, gameStatus, answer, reset }) {
  return (
    <div className={`${gameStatus} banner`}>
      <p>
        {gameStatus === 'happy' && (<><strong>Congratulations!</strong> Got it in{' '}
        <strong>{count} guesses</strong>.</>)}
        {gameStatus === 'sad' && <>Sorry, the correct answer is {answer}.</>}
        <button onClick={reset} className="reset">Click here to play again.</button>
      </p>
    </div>
  );
}

export default GameOver;
