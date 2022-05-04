import Bishop from "./bishop";
import Square from "../square";
import King from "./king";
import Player from "../player";

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
            const pieceToTake = board.getPiece(piecePosition);
            if(pieceToTake instanceof King) {
                return moves.slice(0, moves.indexOf(piecePosition)).concat(availableMoves);
            } else if (this.player === Player.BLACK && pieceToTake.player === Player.WHITE) {
                return moves.slice(0, moves.indexOf(piecePosition)+1).concat(availableMoves);
            }  else if (this.player === Player.WHITE && pieceToTake.player === Player.BLACK) {
                return moves.slice(0, moves.indexOf(piecePosition)+1).concat(availableMoves);
            } else {
                return moves.slice(0, moves.indexOf(piecePosition)).concat(availableMoves);
            }
        } else {
            return moves.concat(availableMoves);
        }
    }
}
