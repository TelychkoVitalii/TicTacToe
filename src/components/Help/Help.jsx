import React from 'react';
import '../../styles/Help.css';

function Help() {
    return (
        <div className="helpSection">
            <div>
                <h1>Tic Tac Toe Game</h1>
                <p>Games played on three-in-a-row boards can be traced back to ancient Egypt,
                    where such game boards have been found on roofing tiles dating from around 1300 BCE.
                    An early variation of tic-tac-toe was played in the Roman Empire, around the first century BC. It was called terni lapilli (three pebbles at a time) and instead of having any number of pieces, each player only had three, thus they had to move them around to empty spaces to keep playing.
                    The game's grid markings have been found chalked all over Rome. Another closely related ancient game is Three Men's Morris which is also played on a simple grid and requires three pieces in a row to finish, and Picaria, a game of the Puebloans.
                </p>
                <p>In 1952, OXO (or Noughts and Crosses), developed by British computer scientist Alexander S. Douglas for the EDSAC computer at the University of Cambridge, became one of the first known video games.
                    The computer player could play perfect games of tic-tac-toe against a human opponent
                </p>
                <p>In 1975, tic-tac-toe was also used by MIT students to demonstrate the computational power of Tinkertoy elements. The Tinkertoy computer, made out of (almost) only Tinkertoys, is able to play tic-tac-toe perfectly.It is currently on display at the Museum of Science, Boston.</p>
                <h1>How to play</h1>
                <ul>
                    <li>Go to the 'Settings' section and select the ones that suit you</li>
                    <li>After this, the game begins and your winning is guaranteed
                        if you manage to fill 3 fields at once horizontally, vertically or diagonally.
                        The computer plays no worse than you, so winning it will be difficult!
                    </li>
                    <li>At the end of the game, you can see your results.
                        Also near the game field there is a list of winners
                    </li>
                </ul>
                <h2>Have a good game!</h2>
            </div>
        </div>
    );
}

export default Help;