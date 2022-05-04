import Piece from './piece';
import Square from "../square";
import Player from "../player";
import King from "./king";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let moves = [];

        for (let i = 0; i < 8; i++) {
            let move = Square.at(location.row, i);

            if (i !== location.col) {
                moves.push(move);
            }

        }

        for (let i = 0; i < 8; i++) {
            let move = Square.at(i, location.col);

            if (i !== location.row) {
                moves.push(move);
            }
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
                return moves.slice(0, moves.indexOf(piecePosition))-1;
            } else if (this.player === Player.BLACK && pieceToTake.player === Player.WHITE) {
                return moves.slice(0, moves.indexOf(piecePosition)+1);
            }  else if (this.player === Player.WHITE && pieceToTake.player === Player.BLACK) {
                return moves.slice(0, moves.indexOf(piecePosition)+1);
            } else {
                return moves.slice(0, moves.indexOf(piecePosition));
            }
        } else {
            return moves;
        }
    }
}
