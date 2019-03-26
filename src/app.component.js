import React from 'react';

import StartPage from './components/startpage.component';
import GameField from './components/game.component';

const configStyle = {
    width: 1000,
    height: 700,

    backgroundColor: '#ff0000',
};

class Application extends React.Component {

    constructor(props) {
        super(props);

        this.runGame = this.runGame.bind(this);
        this.stopGame = this.stopGame.bind(this);

        this.state = {
            runGame: false
        };
    }

    runGame() {
        this.setState( {
            runGame: true
        })
    }

    stopGame() {
        this.setState({
            runGame: false
        })
    }

    render() {
        return (
            <div style = {configStyle}>
                {
                    !this.state.runGame
                        ? <StartPage runGame = {this.runGame} />
                        : <GameField stopGame = {this.stopGame}/>

                }
            </div>
        );
    }
}



export default Application;

