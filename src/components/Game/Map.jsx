import React from 'react';
import { StyledMap } from '../../styles/map';

const mockMap = [
  [{roomNo: 0, N: false, S: false, E: true, W: false}, {roomNo: 1, N: false, S: false, E: true, W: true}, {roomNo: 2, N: false, S: true, E: false, W: true}, {roomNo: 3, N: false, S: true, E: false, W: false, item:"gem"}],
  [{roomNo: 4, N: true, S: true, E: true, W: false}, {roomNo: 5, N: false, S: false, E: false, W: true, item: "treasure", gameOver: true}, {roomNo: 6, N: true, S: true, E: true, W: false}, {roomNo: 7, N: true, S: false, E: false, W: true}],
  [{roomNo: 8, N: true, S: true, E: true, W: false}, {roomNo: 9, N: false, S: false, E: false, W: true}, {roomNo: 10, N: true, S: true, E: false, W: false}, {roomNo: 11, N: false, S: true, E: false, W: false, item: "coin"}],
  [{roomNo: 12, N: true, S: false, E: true, W: false}, {roomNo: 13, N: false, S: false, E: true, W: true}, {roomNo: 14, N: true, S: false, E: true, W: true}, {roomNo: 15, N: true, S: false, E: false, W: true}]
]

export default function Map(props) {
    return (
      <StyledMap>
          Map
          {mockMap.map(row => 
            <div className="row">
              {row.map(room => {
              return  <div className={`room n-wall-${room.N} e-wall-${room.E} s-wall-${room.S} w-wall-${room.W}`}>
               {room.roomNo}
               </div>
              })}
            </div>
          )}
      </StyledMap>
    );
  }