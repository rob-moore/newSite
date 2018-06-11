import React, { Component } from 'react';
import ExampleAPI from '../API';
import {Link} from 'react-router-dom'
import './Users.css'

class Users extends Component {
    render() {
        return (
            <div>
                <ul>
                {
                    ExampleAPI.getAll().map(u => (
                        <li key={u.id}>
                            <Link to={`/users/${u.id}`}>{u.name}</Link>
                        </li>
                    ))
                }
                </ul>       
            </div>
        );
    }
}

export default Users;