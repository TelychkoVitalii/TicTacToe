const aiPlayerType = (figure) => {
    let oppositeType = '';
    if(figure === 'X') {
        oppositeType = 'O';
        return oppositeType;
    } else if(figure === 'O') {
        oppositeType = 'X';
        return oppositeType;
    }
};

export default aiPlayerType;