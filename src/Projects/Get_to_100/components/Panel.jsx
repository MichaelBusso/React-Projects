import Gamer from "./Gamer";
import { useState } from "react";

const Panel = ({ setGameStarted, players }) => {

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

    const moveTurnHandler = () => {
        for (let i = 0; i < players.length; i++) {
            if (players[(currentPlayerIndex + 1 + i) % players.length].inGame) {
                setCurrentPlayerIndex((currentPlayerIndex + 1 + i) % players.length);
                break;
            }
        }
        gameModeChecker();
    }

    const setPlayerToLocalStorage = (player) => {
        const usersStorgae = JSON.parse(localStorage.getItem('users'));
        const index = usersStorgae.findIndex(user => user.name === player.name);
        usersStorgae[index] = player;
        localStorage.setItem('users', JSON.stringify(usersStorgae));
    }

    const gameModeChecker = () => {
        if (!players.some((obj) => obj.inGame === true)) {
            players.forEach((player) => setPlayerToLocalStorage(player));
            setTimeout(() => {
                const averageArray = average();
                const winnersArray = winners();
                alert('Game Over!!! \n \n Ranking: \n' + averageArray + '\n Current Winners: \n' + winnersArray + '\n You will be returned to the main page now!');
                players.length = 0;
                setGameStarted();
            }, 100);
        }
    }

    const average = () => {
        let storage = JSON.parse(localStorage.getItem('users'));
        let average = [];
        storage.forEach((user) => {
            let i = 0;
            let sum = 0;
            for (i; i < user.scores.length; i++) {
                sum += user.scores[i];
            }
            average.push({ name: user.name, average: (sum / i).toFixed(2) });
        });
        average.sort((user1, user2) => user1.average - user2.average);
        const emojisArray = ['🥇', '🥈', '🥉'];
        let topAverage = '';
        for (let i = 0; i < Math.min(3, average.length); i++) {
            topAverage += emojisArray[i] + ': ' + average[i].name + ' in ' + average[i].average + ' steps in average' + '\n';
        }
        return topAverage;
    }

    const winners = () => {
        let currentWinners = [];
        for (let i = 0; i < players.length; i++) {
            currentWinners.push({ name: players[i].name, steps: players[i].steps });
        }
        currentWinners.sort((player1, player2) => player1.steps - player2.steps);
        const emojisArray = ['🥇', '🥈', '🥉'];
        let topWinners = '';
        for (let i = 0; i < Math.min(3, currentWinners.length); i++) {
            topWinners += emojisArray[i] + ': ' + currentWinners[i].name + ' in ' + currentWinners[i].steps + ' steps' + '\n';
        }
        return topWinners;
    }

    return (
        <div className="panelGamersContainer">
            {players.map((player, index) => (
                <Gamer
                    player={player}
                    key={index}
                    currentPlayerIndex={currentPlayerIndex}
                    setCurrentPlayerIndex={moveTurnHandler}
                />
            ))}
        </div>
    )
}

export default Panel;