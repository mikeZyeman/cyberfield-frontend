import React from 'react';

class MenuUI extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.runGame ?
                        (
                            <button onClick={this.props.stopGame}>Leave game</button>
                        ) : (
                            <div>

                            </div>
                        )
                }
            </div>
        )
    }
}

export default MenuUI;