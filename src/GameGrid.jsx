import React, { Component } from 'react'
import Square from './Square.jsx'
import NewGameButton from './NewGameButton.jsx'
import GameWon from './GameWon.jsx'
import { calcNewGrid, calcGameStart, calcIfWon } from './utils/Helpers.js'

class GameGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positions : [
                [1, false],
                [2, false],
                [3, false],
                [4, false],
                [5, false],
                [6, false],
                [7, false],
                [8, false],
                [9, false],
                [10, false],
                [11, false],
                [12, false],
                [13, false],
                [14, false],
                [15, false],
                ["", false]
            ],        
            blank_square: 15,
            game_won: false,
            number_of_moves: 0
        };
    }

    handleClick(button_number, button_position) {
        let num_moves = this.state.number_of_moves + 1;
        let positions_copy = this.state.positions.slice();
        let newGrid = calcNewGrid(positions_copy, 
                                  button_position,
                                  button_number,
                                  this.state.blank_square);

        this.setState({ positions: newGrid,
            blank_square: button_position,
            number_of_moves: num_moves });

        if (calcIfWon(newGrid) === true) {
            this.handleGameWin();
        }        
    }

    handleNewGame() {
        let startingPos = calcGameStart();
        this.setState({ 
            positions: startingPos.positions,
            blank_square: startingPos.blank_square,
            game_won: false,
            number_of_moves: 0
        });
    }

    handleGameWin() {
        this.setState({
            game_won: true
        })
    }

    render() {
        const clickProp = this.handleClick.bind(this);

        return (
            <div>
                <section className="grid-container">
                    {this.state.game_won ?
                    <GameWon moves={this.state.number_of_moves} /> :
                    this.state.positions.map(function(pos, index) {
                        return <Square number={pos[0]}
                            pos={index}
                            isClickable={pos[1]} 
                            clickHandler={clickProp}
                            key={index} />;                  
                    })}
                    <br />
                    <NewGameButton clickHandler={this.handleNewGame.bind(this)} />
                </section>
                
            </div>
        );
    }
}

export default GameGrid
    