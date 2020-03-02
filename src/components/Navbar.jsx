import React from 'react';
import { Link, Route} from "react-router-dom";
import Landing from './Landing';
import Login from './Login';

export default function Navbar(props){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
            <main>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
            </main>
        </div>
    );
}