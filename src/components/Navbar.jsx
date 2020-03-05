import React from "react";
import { Link, Route } from "react-router-dom";
import Auth from "./Auth";
import About from "./About";
import Game from "./Game/Game";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { StyledNavbar } from "../styles/navbar";

export default function Navbar(props) {
  return (
    <div>
      <StyledNavbar>
        <Link to="/">Robomaze</Link>
        <Link to="/about">About</Link>
      </StyledNavbar>
      <main>
        <Route exact path="/" component={Auth} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute path="/play" component={Game} />
      </main>
    </div>
  );
}
