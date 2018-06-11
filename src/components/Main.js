import React, {Component} from 'react';
import Home from './Home'
import Contact from './Contact'
import {Switch, Route} from 'react-router-dom';
import Users from './Users';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/users' component={Users}/>
                </Switch>
            </main>
        )
    }
}

export default Main;
