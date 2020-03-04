import React from 'react';
import { StyledMap } from '../../styles/map';
import { mockMap } from './mockMap';

export default function Map(props) {
    return (
      <StyledMap>
          {mockMap.map(row => 
            <div className="column">
              {row.map(room => {
              return <div className={`room n-wall-${room.sides.up} s-wall-${room.sides.down} e-wall-${room.sides.right} w-wall-${room.sides.left} wall-l-${room.id < 30} wall-r-${room.id >= 870} wall-t-${room.id % 30 === 0} `}>
               </div>
              })}
            </div>
          )}
      </StyledMap>
    );
  }