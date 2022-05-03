import Bishop from "./bishop";
import Square from "../square";

export default class Queen extends Bishop {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = super.getAvailableMoves(board)

        let location = board.findPiece(this);
        let moves = [];

        for(let i = 0; i < 8; i++) {
            let move = Square.at(location.row, i);

            if (i !== location.col) { moves.push(move); }

        }

        for(let i = 0; i < 8; i++) {
            let move = Square.at(i, location.col);

            if (i !== location.row) { moves.push(move); }
        }

        return moves.concat(availableMoves);
    }
}
