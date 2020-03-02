import React from 'react';
import { Link, Route} from "react-router-dom";
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Game from './Game';
import { ProtectedRoute } from '../utils/ProtectedRoute';

export default function Navbar(props){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
            <main>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute path="/play" component={Game} />
            </main>
        </div>
    );
}