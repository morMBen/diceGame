import React from 'react';
import MyButton from '../Button/MyButton';
import Dice from '../Dise/Dice'
import MyInput from '../Input';
import MassageBox from '../MassegeBox/MassageBox'
import Music from '../Music/Music'

const GamePanel = (props) => {

    const roleDice = () => {
        props.setDices([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1])
    }


    return (
        <div className="gamePanel">
            <Music />
            <MyButton
                myValue="newGame"
                onUserClick={props.newGame}
                eventOn={props.eventOn}
            />
            <Dice
                injectDice={props.injectDice}
                diceVissibility={props.diceVisibility}
            />
            <MyButton
                myValue="Roll dice"
                onUserClick={roleDice}
                eventOn={props.eventOn}
            />
            <MyButton
                myValue="Hold"
                onUserClick={props.holdPoints}
                eventOn={props.eventOn} />
            <MyInput
                onChange={props.inputChange}
                inputValue={props.inputValue}
                inputDisplay={props.inputDisplay}
                inputKeyDown={props.inputKeyDown}
            />
            <MassageBox
                myMassege={props.myMassege}
            />
        </div>
    )

}
export default GamePanel;