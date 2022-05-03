import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        let location = board.findPiece(this)
        let r = location.row;
        let c = location.col;

        const possibleMoves = [
            Square.at(r+1, c+2),Square.at(r+2, c+1), Square.at(r+1, c-2), Square.at(r+2, c-1),
            Square.at(r-1, c+2), Square.at(r-2, c+1), Square.at(r-1, c-2), Square.at(r-2, c-1)
        ];

        const moves = [];

        for(const move of possibleMoves) {
            if(move.row < 0 || move.row > 7 || move.col < 0 || move.col > 7) {
                continue;
            } else {
                moves.push(move)
            }
        }
        return moves;
    }
}
