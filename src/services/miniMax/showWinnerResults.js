import defineWinner from './defineWinner';

const showWinnerResults = (showWinner, matrix, human, computer) => {
    if(defineWinner(matrix, human)) {
        showWinner.isActive = true;
        showWinner.text = 'You are the winner';
        return human;
    } else if(defineWinner(matrix, computer)) {
        showWinner.isActive = true;
        showWinner.text = 'The computer won. Do you still think that people are smarter than robots?';
        return computer;
    } else if(!matrix.includes('')) {
        showWinner.isActive = true;
        showWinner.text = 'Tie. Let`s try again';
        return null;
    }
};

export default showWinnerResults;
// winnerStyle
