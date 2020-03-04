import styled from 'styled-components'
import mapBg from '../assets/images/old-map-bg.jpg';

export const StyledMap = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    
    background-image: url(${mapBg});
    background-size: 100% 100%;
    .row {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .room {
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 25%;
            &.n-wall-true {
                border-top: 1px solid black;
            }
            &.e-wall-true {
                border-right: 1px solid black;
            }
            &.s-wall-true {
                border-bottom: 1px solid black;
            }
            &.w-wall-true {
                border-left: 1px solid black;
            }
        }
    }
`
