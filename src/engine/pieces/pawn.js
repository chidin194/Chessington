import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this);
        let availableMoves = [];

        function checkBlockingPiece(move) {
            return !board.getPiece(move);
        }

        // function checkBoardBounds(move) {
        //     return !(move.row < 0 || move.row > 7 || move.col < 0 || move.col > 7)
        // }

        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                    availableMoves = [Square.at(location.row + 1,
                    location.col), Square.at(location.row + 2, location.col)];
                const possibleMoves = availableMoves.filter(checkBlockingPiece);
                if (possibleMoves.length === 1 && possibleMoves[0].row - 2 === 1) {
                    return [];
                } else {
                    return possibleMoves;
                }

            } else if (location.row <= 6) {
                availableMoves = [Square.at(location.row + 1, location.col)];
                return availableMoves.filter(checkBlockingPiece);
            } else {
                return [];
            }
        }
        else {
            if (location.row === 6) {
                availableMoves = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
                const possibleMoves = availableMoves.filter(checkBlockingPiece);
                if (possibleMoves.length === 1 && possibleMoves[0].row + 2 === 6) {
                    return [];
                } else {
                    return possibleMoves;
                }
            } else if(location.row >= 1) {
                availableMoves = [Square.at(location.row - 1, location.col)]
                return availableMoves.filter(checkBlockingPiece);
            } else {
                return [];
            }
        }
    }
}
