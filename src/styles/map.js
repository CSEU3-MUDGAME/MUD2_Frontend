import styled from "styled-components";
import mapBg from "../assets/images/old-map-bg.jpg";

export const StyledMap = styled.div`
  height: 600px;
  width: 800px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 8px;
  border: 2px solid #a52929;
  .room {
    width: ${100/25}%;
    height: ${100/30}%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.4);

    .coins {
      width: 20px;
      height: 20px;
      position: absolute;
      z-index: 1;
    }
    .robot {
      z-index: 7;
      padding: 0;
    }
    &.n-wall-false {
      border-top: 2px solid #a52929;
    }

    &.s-wall-false {
      border-bottom: 2px solid #a52929;
    }

    &.w-wall-false {
      border-left: 2px solid #a52929;
    }

    &.e-wall-false {
      border-right: 2px solid #a52929;
    }




    &.wall-l-true {
      border-left: 4px solid #a52929;
    }
    &.wall-r-true {
      border-right: 4px solid #a52929;
    }
    &.wall-t-true {
      border-top: 4px solid #a52929;
    }
    &.wall-b-true {
      border-bottom: 4px solid #a52929;
    }
  }
`;
