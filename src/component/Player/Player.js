const Player = (props) => {

    const setTurnSing = (turn) => {
        let className = turn === 1 ? 'fas fa-dice-one fa-2x' : 'fas fa-dice-two fa-2x';
        let visibility = props.playerId === props.playerTurn.toString() ? "visible" : "hidden";
        return <i style={{ visibility: visibility }} className={className}></i>
    }

    return (
        <div className="playerScore">
            {setTurnSing(props.playerTurn)}
            <div className="currentScore">
                <h3>{props.myPlayerName}</h3>
                <p>{props.tempScore}</p>
            </div>
            <div className="globalScore">
                <p>CURRENT</p>
                <p>{props.globalScore}</p>
            </div>
        </div>
    )

}

export default Player;