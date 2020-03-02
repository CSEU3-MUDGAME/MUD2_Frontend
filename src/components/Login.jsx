import React, { useRef } from 'react';
import axios from 'axios';

export default function Login(props){
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handlelogin = (e) => {
        e.preventDefault();
        axios.post("https://lambda-mud-test.herokuapp.com/api/login/",{
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.key)
            props.history.push("/play")
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Log In</h1>
            <input name="username" type="text" ref={usernameRef} placeholder="Username" />
            <input name="password" type="password" ref={passwordRef} placeholder="Password" />
            <button onClick={handlelogin}>Go</button>
            <p>Don't have an account yet? Register <a href='/register'>here</a></p>
        </div>
    );
}