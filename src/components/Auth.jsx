import React, { useRef, useState } from "react";
import axios from "axios";

export default function Auth(props) {
  const [authType, setAuthType] = useState("login");
  return (
    <>
      {authType === "login" ? <Login {...props} /> : <Register {...props}/>}
      {authType === "login" ? (
        <p>
          Don't have an account yet? Register{" "}
          <span onClick={() => setAuthType("register")}>here</span>
        </p>
      ) : (
        <p>
          Already have an account? Login{" "}
          <span onClick={() => setAuthType("login")}>here</span>
        </p>
      )}
    </>
  );
}

function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();


  const handlelogin = () => {
    axios
      .post("https://adv-team2.herokuapp.com/api/login/", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        props.history.push("/play");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Log In</h1>
      <input
        name="username"
        type="text"
        ref={usernameRef}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        ref={passwordRef}
        placeholder="Password"
      />
      <button onClick={handlelogin}>Go</button>
    </div>
  );
}

function Register(props) {
  const usernameRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  const handleregister = e => {
    e.preventDefault();
    axios
      .post("https://adv-team2.herokuapp.com/api/registration/", {
        username: usernameRef.current.value,
        password1: password1Ref.current.value,
        password2: password2Ref.current.value
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.key);
        props.history.push("/play");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        name="username"
        type="text"
        ref={usernameRef}
        placeholder="Username"
      />
      <input
        name="password1"
        type="password"
        ref={password1Ref}
        placeholder="Password"
      />
      <input
        name="password2"
        type="password"
        ref={password2Ref}
        placeholder="Confirm Password"
      />
      <button onClick={handleregister}>Go</button>
    </div>
  );
}
