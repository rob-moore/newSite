import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to='/contact'>Contact</Link>
                <Link to='/users'>Users</Link>
            </div>
        )
    }
}

export default Home;