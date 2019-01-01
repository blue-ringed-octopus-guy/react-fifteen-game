export function calcNewGrid(all_positions, pos, num, blank_square) {
    const squares = [
        [1, 4],
        [0, 2, 5],
        [1, 3, 6],
        [2, 7],
        [0, 5, 8],
        [1, 4, 6, 9],
        [2, 5, 7, 10],
        [3, 6, 11],
        [4, 9, 12],
        [5, 8, 10, 13],
        [6, 9, 11, 14],
        [7, 10, 15],
        [8, 13],
        [9, 12, 14],
        [10, 13, 15],
        [11, 14]
    ];    

    let result = all_positions.slice();  
    result[pos] = ["", false];
    result[blank_square][0] = num;
    let clickable_squares = squares[pos];

    for (let i = 0; i < result.length; i++) {
        if (clickable_squares.indexOf(i) > -1) {
            result[i][1] = true;
        } else {
            result[i][1] = false;
        }
    }

    return result;
}

export function calcIfWon(all_positions) {
    const completedGrid = [
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
        [12, true],
        [13, false],
        [14, false],
        [15, true],
        ["", false]
    ];

    for (let i = 0; i < all_positions.length; i++) {
        if (completedGrid[i][0] !== all_positions[i][0]) {
            return false;
        }
    }    
    return true;
}

export function calcGameStart() {
    let positions = [
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
        [12, true],
        [13, false],
        [14, false],
        [15, true],
        ["", false]
    ];

    let current_pos = 0;
    let num = 0;
    let blank = 15;

    for (let i = 0; i < 5000; i++) {
        let x = Math.floor((Math.random() * 16));
        if (positions[x][1] === false) {
            continue;
        } else {
            current_pos = x;
            num = positions[x][0];
            let newone = positions.slice();
            positions = calcNewGrid(newone,
                current_pos,
                num,
                blank);
            blank = current_pos;
        }
    }
    
    let result = {positions, blank_square: blank};
    return result;
}