import React from 'react';
import GamePanel from '../GamePanel/GamePanel';
import ScoresTable from '../ScoreTable/ScoresTable';
import Winner from '../WinnerMassege/Winner'
// import MyButton from './MyButton'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceVisibility: false,
            inputDisplay: 'visible',
            inputValue: '',
            pointsToWin: 0,
            dices: [6, 6],
            playerTurn: 1,
            allEventOn: false,
            winner: '',
            winnerDisplay: 'none',
            tempMassege: 'Insert The Target Score',
            players: [
                {
                    name: 'Player 1',
                    currentScore: 0,
                    globalScore: 0,
                },
                {
                    name: 'Player 2',
                    currentScore: 0,
                    globalScore: 0,
                }
            ]
        };

    }
    test = () => {
    }
    hold = () => {
        if (!(this.state.players[0].currentScore === 0 && this.state.players[1].currentScore === 0)) {
            this.setScoreInState(this.state.players[this.state.playerTurn - 1].currentScore, 'globalScore', true)
        } else {
        }
    }
    newGame = () => {
        this.setState({
            playerTurn: 1,
            allEventOn: false,
            inputDisplay: 'visible',
            tempMassege: 'Insert The Target Score',
            winner: '',
            winnerDisplay: 'none',
            players: this.state.players.map((e) =>
                true ? {
                    ...e, globalScore: 0, currentScore: 0
                } : e)
        })
    }

    setDicesScore = (diceNum) => {
        this.setScoreInState(diceNum.reduce((acc, cur) => acc + cur), 'currentScore')
        this.setState({
            dices: diceNum,
            diceVisibility: true,
            allEventOn: false,
        }, () => {
            setTimeout(() => {
                this.setState({ diceVisibility: false, allEventOn: true, playerTurn: this.switchPlayer(diceNum) })

            }, 1000)
        })
    }

    switchPlayer = (diceNum) => {
        if (diceNum[0] === diceNum[1]) {
            this.setScoreInState(0, 'currentScore')
            return this.state.playerTurn === 1 ? 2 : 1
        } return this.state.playerTurn
    }

    setScoreInState = (diceNum, globalOrLocal, deleteCurrent = false) => {
        this.setState({
            playerTurn: diceNum[0] === diceNum[1] ? this.state.playerTurn === 1 ? 1 : 2 : this.state.playerTurn,
            players: this.state.players.map((e, i) =>
                i === this.state.playerTurn - 1 ? {
                    ...e, [globalOrLocal]: this.checkScores(e[globalOrLocal], diceNum, globalOrLocal)
                } : e)
        }, () => {
            if (deleteCurrent) {
                this.setState({
                    playerTurn: diceNum[0] === diceNum[1] ? this.state.playerTurn === 1 ? 2 : 1 : this.state.playerTurn,
                    players: this.state.players.map((e, i) =>
                        i === this.state.playerTurn - 1 ? {
                            ...e, currentScore: 0
                        } : e)
                })
            }
        }, () => {
            let temp = JSON.stringify(this.state.players)
            let temp2 = JSON.parse(temp)
            this.setState({ players: temp2 })
        }
        )
    }

    checkScores = (e, diceNum, globalOrLocal) => {
        if (diceNum === 0) {
            return 0
        } else {
            if (globalOrLocal === 'globalScore') {
                return e + diceNum > this.state.pointsToWin ? this.winnerMassege() : diceNum === 0 ? 0 : e += diceNum
            } else {
                return e + diceNum > this.state.pointsToWin ? 0 : e += diceNum
            }
        }
    }

    inputField = (e) => {
        const reg = new RegExp(/^[0-9]*$/)
        if (e.target.value.match(reg)) {
            this.setState({ inputValue: e.target.value })
        }
    }
    inputKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (this.state.inputValue < 10 || this.state.inputValue > 500) {
                this.setState({
                    tempMassege: `Numbers ONLY
                    50 - 500`}, () => {
                    setTimeout(() => {
                        this.setState({
                            tempMassege: 'Insert The Target Score',
                        })
                    }, 2000)
                })

            } else {
                this.setState({
                    allEventOn: 'true',
                    inputDisplay: "hidden",
                    inputValue: '',
                    tempMassege: `Target: ${this.state.inputValue} `,
                    pointsToWin: this.state.inputValue
                })
            }
        }
    }

    winnerMassege = () => {
        let tempWinner;
        if (this.state.players[0].globalScore === this.state.pointsToWin) {
            tempWinner = this.state.players[0].name;
        } else { tempWinner = this.state.players[0].name }
        this.setState({
            winner: `And The Winner is...
 ${tempWinner}`,
            winnerDisplay: 'flex',
        }, () => {
        })
        console.log(tempWinner)
        return this.state.pointsToWin
    }

    render() {
        return (
            <div>
                <Winner
                    winnerMassege={this.state.winner}
                    winnerDisplay={this.state.winnerDisplay}
                    newGame={this.newGame}
                    eventOn={this.state.allEventOn}
                />
                <GamePanel
                    diceVisibility={this.state.diceVisibility}
                    injectDice={this.state.dices}
                    setDices={this.setDicesScore}
                    pointsToWin={this.state.pointsToWin}
                    holdPoints={this.hold}
                    newGame={this.newGame}
                    eventOn={this.state.allEventOn}
                    test={this.test}
                    inputDisplay={this.state.inputDisplay}
                    inputValue={this.state.inputValue}
                    inputChange={this.inputField}
                    inputKeyDown={this.inputKeyDown}
                    myMassege={this.state.tempMassege}
                />
                <ScoresTable
                    p1Current={this.state.players[0].currentScore}
                    p1Golbal={this.state.players[0].globalScore}
                    p2Current={this.state.players[1].currentScore}
                    p2Golbal={this.state.players[1].globalScore}
                    playerTurn={this.state.playerTurn}
                />
            </div>
        )
    }
}
export default Game;