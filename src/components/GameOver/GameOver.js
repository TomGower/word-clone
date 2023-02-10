import React from "react";

// Josh restructures this into a Banner, and separate GameWon and GameLost components
// this is a bit too bespoke to take advantage of components. it's only good for very specific circumstances
// not really a big deal in a project of this size, but not genericized enough for a large project
function GameOver({ count, gameStatus, answer, reset }) {
  return (
    <div className={`${gameStatus} banner`}>
      <p>
        {gameStatus === 'happy' && (<><strong>Congratulations!</strong> Got it in{' '}
        <strong>{count} guess{count > 1 && 'es'}</strong>.</>)}
        {gameStatus === 'sad' && <>Sorry, the correct answer is {answer}.</>}
        <button onClick={reset} className="reset">Click here to play again.</button>
      </p>
    </div>
  );
}

export default GameOver;
