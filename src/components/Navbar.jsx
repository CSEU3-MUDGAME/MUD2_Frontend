import React from "react";
import { Link, Route } from "react-router-dom";
import Landing from "./Landing";
import Auth from "./Auth";
import Game from "./Game/Game";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { StyledNavbar } from "../styles/navbar";

export default function Navbar(props) {
  const token = localStorage.getItem("token");
  return (
    <div>
      <StyledNavbar>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={() => {
              props.history.push("/");
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        )}
      </StyledNavbar>
      <main>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Auth} />
        <ProtectedRoute path="/play" component={Game} />
      </main>
    </div>
  );
}
