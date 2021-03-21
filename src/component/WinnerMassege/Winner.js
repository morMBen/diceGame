import MyButton from '../Button/MyButton'
import '../WinnerMassege/winner.css'
const Winner = (props) => {
    return (<div className="winner" style={{ display: props.winnerDisplay }}>
        <h1>{props.winnerMassege}</h1>
        <MyButton myValue="newGame"
            onUserClick={props.newGame}
            eventOn={props.eventOn} />
    </div>)
}

export default Winner;