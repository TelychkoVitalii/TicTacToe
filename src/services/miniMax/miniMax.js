import aiPlayerType from './oppositeType';
import defineWinner from './defineWinner';

const miniMax = (newField, player) => {
    let currentFigure = JSON.parse(localStorage.getItem('settings')).figure,
        availCells = newField.filter(el => (el !== 'O' && el !== 'X')),
        size = availCells.length,
        result, moves = [], bestMove, bestScore, i, move;

    if(defineWinner(newField, player)) {
        return {score: -10}
    } else if(defineWinner(newField, aiPlayerType(player))) {
        return {score: 10}
    } else if(availCells.length === 0) {
        return {score: 0}
    }

    for (i = 0; i < size; i += 1) {
        move = {};
        move.index = newField[availCells[i]];
        newField[availCells[i]] = player;
        if(player === currentFigure) {
            result = miniMax(newField, aiPlayerType(player));
            move.score = result.score;
        } else {
            result = miniMax(newField, player);
            move.score = result.score;
        }
        newField[availCells[i]] = move.index;
        moves.push(move);
    }

    if(player === currentFigure) {
        bestScore = -10000;
        for (i = 0; i < size; i += 1) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        bestScore = 10000;
        for (i = 0; i < size; i += 1) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
};

export default miniMax;