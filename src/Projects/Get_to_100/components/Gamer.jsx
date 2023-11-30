import Buttons from "./Buttons";
import { useState } from "react";
import './components style/Gamer.css'

const Gamer = ({ player, currentPlayerIndex, setCurrentPlayerIndex }) => {

    const [number, setNumber] = useState(player.number);
    const [steps, setSteps] = useState(player.steps);

    const isCurrentPlayer = ((playerIndex) => playerIndex === currentPlayerIndex);

    const actionHandler = (action) => {
        if (isCurrentPlayer(player.index)) {
            player.number = action(player.number);
            setNumber(player.number);
            player.steps++;
            setSteps(player.steps);
            if (player.number === 10) {
                player.inGame = false;
                player.scores.push(player.steps);
            }
            setCurrentPlayerIndex();
        }
    }

    return (
        <div className='container'>
            <h3>Gamer: {player.name} == {isCurrentPlayer(player.index) && player.number !== 10 ? <span className="enable">Enabled</span> : 'Disabled'} == {player.number === 10 ? <span className="finished">Finished</span> : 'In the Game'}</h3>
            <h3>Number: {number}</h3>
            <h3>Steps: {steps}</h3>
            <Buttons
                key={'btns'}
                doSomeAction={actionHandler}
                currentNumber={player.number}
            />
            <h3>{player.name}'s scores: {player.scores.join(' , ')}</h3>
        </div>
    )
}

export default Gamer;