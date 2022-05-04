import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let r = location.row;
        let c = location.col;

        const possibleMoves = [ Square.at(r+1, c-1), Square.at(r+1, c), Square.at(r+1, c+1), Square.at(r, c-1),
            Square.at(r, c+1), Square.at(r-1, c-1), Square.at(r-1, c), Square.at(r-1, c+1)];

        const moves = [];

        for(const move of possibleMoves) {
            if(move.row < 0 || move.row > 7 || move.col < 0 || move.col > 7) {
                continue;
            } else {
                moves.push(move)
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
                return moves.slice(0, moves.indexOf(piecePosition));
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
