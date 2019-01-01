import React, { Component } from 'react';

class NewGameButton extends Component {

    handleClick() {
        this.props.clickHandler();
    }

    render() {
        return (
            <div className="new-game-container">
                <button onClick={this.handleClick.bind(this)}
                    className="new-game-button">New Game
                </button>
            </div>
        );
    }
}

export default NewGameButton