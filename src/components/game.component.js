import React from 'react';
import MenuUI from './menu.component';

class GameField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMenu: false
        };

        this.handleOptions = this.handleOptions.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleOptions() {
        this.setState({
            isMenu: true
        });

        this.componentWillUnmount();
    }

    handleKeyPress(event) {

        if (event.keyCode === 79) {
            this.handleOptions();
        }

    }

    render() {
        return (
            <div>
                { this.state.isMenu ? <MenuUI runGame = { true } stopGame = {this.props.stopGame}/> : null }
                <IGame />
            </div>
        );
    }
}

const IGame = () => {
    return(
        <div>
            <p>Lets play</p>
        </div>
    )
};


export default GameField;