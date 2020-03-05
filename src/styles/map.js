import styled from 'styled-components'
import mapBg from '../assets/images/old-map-bg.jpg';

export const StyledMap = styled.div`
    height: 60vh;
    width: 70vw;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    .column {
        width: 3.5%;
        height: 100%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        .room {
            width: 100%;
            height: 2.5%;

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
            &.n-wall-true {
                border-top: 2px solid #d3d3d3;
            }
            &.s-wall-false {
                border-bottom: 2px solid #a52929;
            }
            &.s-wall-true {
                border-bottom: 2px solid #d3d3d3;
            }
            &.w-wall-false {
                border-left: 2px solid #a52929;
            }
            &.w-wall-true {
                border-left: 2px solid #d3d3d3;
            }
            &.e-wall-false {
                border-right: 2px solid #a52929;
            }
            &.e-wall-true {
                border-right: 2px solid #d3d3d3;
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
    }
`
