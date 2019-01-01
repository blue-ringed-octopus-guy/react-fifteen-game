import React, { Component } from 'react';

function GameWon(props) {
    return (
        <div className="won-panel">
            <p>Congratulations! You've completed the game!</p>
            <p className="won-moves-text">It took you
                <span className="moves-element"> {props.moves} </span>
            moves.</p>
            <p className="won-try-again-text">Press the "New Game" button to start again.</p>
        </div>
    );
}

export default GameWon