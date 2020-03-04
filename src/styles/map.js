import styled from 'styled-components'
import mapBg from '../assets/images/old-map-bg.jpg';

export const StyledMap = styled.div`
    height: 100%;
    width: 70%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    .column {
        width: 3.5%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .room {
            height: 3%;
            display: flex;
            justify-content: center;
            align-items: center;
            &.n-wall-true {
                border-top: 2px solid #a52929;
            }
            &.n-wall-false {
                border-top: 2px solid #f7f7f7;
            }
            &.s-wall-true {
                border-bottom: 2px solid #a52929;
            }
            &.s-wall-false {
                border-bottom: 2px solid #f7f7f7;
            }
            &.w-wall-true {
                border-left: 2px solid #a52929;
            }
            &.w-wall-false {
                border-left: 2px solid #f7f7f7;
            }
            &.e-wall-true {
                border-right: 2px solid #a52929;
            }
            &.e-wall-false {
                border-right: 2px solid #f7f7f7;
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
