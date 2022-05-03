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

        let  piecePosition = '';

        for(const move of moves) {
            if (board.getPiece(move)) {
                piecePosition = move;
            }
        }

        if(piecePosition) {
            return moves.splice(0, 0, moves.indexOf(piecePosition)).concat(availableMoves);
        } else {
            return moves.concat(availableMoves);
        }
    }
}
