import React from 'react';
import p1 from '../img/dice-1.png';
import p2 from '../img/dice-2.png';
import p3 from '../img/dice-3.png';
import p4 from '../img/dice-4.png';
import p5 from '../img/dice-5.png';
import p6 from '../img/dice-6.png';


const Dice = (props) => {



    const rollTheDice = (e) => {
        return props.injectDice.map((e, i) => {
            let temp;
            switch (props.injectDice[i]) {
                case 1:
                    temp = p1;
                    break;
                case 2:
                    temp = p2;
                    break;
                case 3:
                    temp = p3;
                    break;
                case 4:
                    temp = p4;
                    break;
                case 5:
                    temp = p5;
                    break;
                case 6:
                    temp = p6;
                    break;
                default:
            }
            return (<img src={temp} alt="dice" className="diceImg" key={`diceKey${i}`} />)
        });

    }
    return (
        <div style={{ visibility: props.diceVissibility ? "visible" : "hidden" }} >{rollTheDice()}</div>
    )
}

export default Dice;