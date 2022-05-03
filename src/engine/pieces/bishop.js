import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let move;
        let moves = []

        // upward positive diagonal

        for (let i = 0; i < Math.min(7-location.row, 7-location.col); i++) {
            move = Square.at(location.row + (i+1), location.col + (i+1));
            moves.push(move);
        }

        // upward negative diagonal

        for (let i = 0; i < Math.min(7-location.row, location.col); i++) {
            move = Square.at(location.row + (i+1), location.col - (i+1));
            moves.push(move);
        }

        // downward positive diagonal

        for (let i = 0; i < Math.min(location.row, 7-location.col); i++) {
            move = Square.at(location.row - (i+1), location.col + (i+1));
            moves.push(move);
        }

        // downward negative diagonal

        for (let i = 0; i < Math.min(location.row, location.col); i++) {
            move = Square.at(location.row - (i+1), location.col - (i+1));
            moves.push(move);
        }

        let  piecePosition = '';

        for(const move of moves) {
            if (board.getPiece(move)) {
                piecePosition = move;
            }
        }

        if(piecePosition) {
            return moves.splice(0, 0, moves.indexOf(piecePosition))
        } else {
            return moves
        }
    }
}
