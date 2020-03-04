import React from 'react';
import { StyledMap } from '../../styles/map';
import { mockMap } from './mockMap';

export default function Map(props) {
    return (
      <StyledMap>
          {mockMap.map(row => 
            <div className="row">
              {row.map(room => {
              return  <div className={`room n-wall-${room.sides.up} e-wall-${room.sides.right} s-wall-${room.sides.down} w-wall-${room.sides.left}`}>
               {room.id}
               </div>
              })}
            </div>
          )}
      </StyledMap>
    );
  }