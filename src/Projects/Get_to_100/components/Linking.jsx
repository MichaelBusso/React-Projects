import Panel from "./Panel";
import Login from "./Login";
import { useState } from "react";

const Linking = ({ gamePlayers }) => {

    const [gameStarted, setGameStarted] = useState(false);

    const startHandler = () => {
        setGameStarted(!gameStarted);
    }

    return (
        <div>
            {gameStarted ?
                <Panel
                    players={gamePlayers}
                    setGameStarted={startHandler}
                /> :
                <Login
                    setGameStarted={startHandler}
                    gamePlayers={gamePlayers}
                />
            }
        </div>
    )
}

export default Linking;