import React from 'react';
import Player from '../Player/Player';
const ScoresTable = (props) => {


    return (
        <div className="players">
            <Player
                playerId="1"
                myPlayerName="Player 1"
                tempScore={props.p1Current}
                globalScore={props.p1Golbal}
                playerTurn={props.playerTurn}
            />
            <Player
                playerId="2"
                myPlayerName="Player 2"
                tempScore={props.p2Current}
                globalScore={props.p2Golbal}
                playerTurn={props.playerTurn}
            />
        </div>
    )

}
export default ScoresTable;