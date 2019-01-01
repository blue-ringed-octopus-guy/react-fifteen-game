import React, { Component } from 'react';

const grey_numbers = [2, 4, 5, 7, 10, 12, 13, 15]
const initial_moveable = [12, 15]

class Square extends Component {

    handleClick() {
        if (this.props.isClickable) {
            this.props.clickHandler(this.props.number, this.props.pos)
        }
    }

    render() {
        let boxClass = "box red";
        if (grey_numbers.indexOf(this.props.number) > -1) {
            boxClass = "box grey";
        }
        else if (this.props.number === "") {
            boxClass = "box blank"
        }

        if (this.props.isClickable === true) {
            boxClass = boxClass.concat(" clickable")      
        }        

        return (
            <div className={boxClass} onClick={this.handleClick.bind(this)}>
                <span className="number">{this.props.number}</span>
            </div>
        );
    }
}

export default Square