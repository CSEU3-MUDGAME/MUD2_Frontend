import React, { useRef } from 'react';
import axios from 'axios';

export default function Register(props){
    const usernameRef = useRef();
    const password1Ref = useRef();
    const password2Ref = useRef();

    const handleregister = (e) => {
        e.preventDefault();
        axios.post("https://lambda-mud-test.herokuapp.com/api/registration/", {
            username: usernameRef.current.value,
            password1: password1Ref.current.value,
            password2: password2Ref.current.value,
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Register</h1>
            <input name="username" type="text" ref={usernameRef} placeholder="Username" />
            <input name="password1" type="password" ref={password1Ref} placeholder="Password" />
            <input name="password2" type="password" ref={password2Ref} placeholder="Confirm Password" />
            <button onClick={handleregister}>Go</button>
            <p>Already have an account? Log in <a href='/login'>here</a></p>
        </div>
    );
}