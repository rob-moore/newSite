import logo from '../logo.svg';
import React, {Component} from 'react';

class Header extends Component {
    click = () => {
        console.log('hi')
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 onClick={this.click} className="App-title">Welcome to React</h1>
            </header>
        )
    }
}

export default Header;