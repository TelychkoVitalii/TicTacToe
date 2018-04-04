// const miniMax = (newField, player) => {
//     let availCells = newField.filter((el, i) => (el !== 'O' && el !== 'X') && [].push(i)),
//         size = availCells.length,
//         result, moves = [], bestMove, bestScore = 10000, i, move;
//
//     if(defineWinner(newField, this.humanPlayer.type)) {
//         return {score: -10}
//     } else if(defineWinner(newField, this.aiPlayerType())) {
//         return {score: 10}
//     } else if(availCells.length === 0) {
//         return {score: 0}
//     }
//
//     for (i = 0; i < size; i += 1) {
//         move = {};
//         move.index = newField[availCells[i]];
//
//         newField[availCells[i]] = player;
//
//         result = miniMax(newField, this.aiPlayerType());
//         move.score = result.score;
//
//         newField[availCells[i]] = move.index;
//         moves.push(move);
//     }
//
//     for(i = 0; i < size; i += 1) {
//         if(moves[i].score < bestScore){
//             bestScore = moves[i].score;
//             bestMove = i;
//         }
//     }
//
//     return moves[bestMove];
// }

// showModal = () => {
//     // this.$el[0].parentElement.classList.add('blur');
//     this.showChildView('modal', new ModalView);
// },

// showWinner = (cells) => {
//     Array.from(cells).filter(el => {
//         const value = el.children[this.firstElement];
//         (value.innerText) && (value.classList = 'winnerStyle');
//     });
//     // setTimeout(this.showModal.bind(this), 0);
// },

// defineWinner = (field, player) => {
//     return (
//         (field[0] === player && field[1] === player && field[2] === player) ||
//         (field[3] === player && field[4] === player && field[5] === player) ||
//         (field[6] === player && field[7] === player && field[8] === player) ||
//         (field[0] === player && field[3] === player && field[6] === player) ||
//         (field[1] === player && field[4] === player && field[7] === player) ||
//         (field[2] === player && field[5] === player && field[8] === player) ||
//         (field[0] === player && field[4] === player && field[8] === player) ||
//         (field[2] === player && field[4] === player && field[6] === player)
//     )
// }

// aiPlayerType = () => {
//     let types = this.settingsModel.attributes.type, oppositeType = '';
//     if(this.humanPlayer.type === types[this.firstElement]) {
//         oppositeType = types[this.secondElement];
//         return oppositeType;
//     } else {
//         return types[this.firstElement];
//     }
// };

// export default miniMax;