import React, { useEffect } from "react";
import { StyledSidebar } from "../../styles/sidebar";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import arrowRight from "../../assets/icons/arrow-right.png";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import arrowDown from "../../assets/icons/arrow-down.png";

export function Sidebar(props) {
  const { player, movePlayer } = props;

  useEffect(() => {
    window.addEventListener("keydown", e => {
      console.log(e.code);
      if (e.code === "ArrowUp") {
        movePlayer("n");
      } else if (e.code === "ArrowDown") {
        movePlayer("s");
      } else if (e.code === "ArrowLeft") {
        movePlayer("w");
      } else if (e.code === "ArrowRight") {
        movePlayer("e");
      }
    });
  }, []);

  return (
    <StyledSidebar>
      {!player ? (
        "Loading"
      ) : (
        <>
          <div className="game-data">
            <p>Player: {player.name}</p>
            <p>Room Number: {player.roomNo}</p>

            <div>
              Players:{" "}
              {player.players.map(p => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="game-data">
            <div className="dirs">
              You can move:
              <p>{player.up === true ? "up" : null}</p>
              <p>{player.down === true ? "down" : null}</p>
              <p>{player.left === true ? "left" : null}</p>
              <p>{player.right === true ? "right" : null}</p>
            </div>
            {/* <div>
              Items
              {!player.items ? null : player.items.split(",").map(item => <p>{item}</p>)}
     
            </div> */}
          </div>
          <div className="controls">
            <div className="row">
              <div className="empty"></div>
              <img
                src={arrowUp}
                onClick={() => movePlayer("n")}
                alt="up"
                id="up"
              />
              <div className="empty"></div>
            </div>
            <div className="row">
              <img
                src={arrowLeft}
                onClick={() => movePlayer("w")}
                alt="left"
                id="left"
              />
              <div className="empty"></div>
              <img
                src={arrowRight}
                onClick={() => movePlayer("e")}
                alt="right"
                id="right"
              />
            </div>
            <div className="row">
              <div className="empty"></div>
              <img
                src={arrowDown}
                onClick={() => movePlayer("s")}
                alt="down"
                id="down"
              />
              <div className="empty"></div>
            </div>
          </div>
        </>
      )}
    </StyledSidebar>
  );
}

const mapStateToProps = state => {
  return {
    player: state.player.player
  };
};

export default connect(mapStateToProps, actions)(Sidebar);
