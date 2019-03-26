import React from 'react';
import MenuUI from "./menu.component";

class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleOptionsbtn = this.handleOptionsbtn.bind(this);

        this.state = {
            isMenu: false
        };

    }

    handleOptionsbtn() {
        this.setState(state => ({
            isMenu: !state.isMenu
        }))
    }

    render() {
        return (
            <div>
                <p>Hello Startpage</p>

                {this.state.isMenu ? <MenuUI runGame = { false }/> : null}

                <button onClick={this.props.runGame}>Start Singleplayer</button>
                <button onClick={this.props.runGame}>Start Singleplayer</button>
            </div>
        );
    }
}

export default StartPage;