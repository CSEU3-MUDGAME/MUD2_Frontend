import styled from 'styled-components'

export const StyledMap = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    .row {
        display: flex;
        width: 100%;
        height: 25%;
        .room {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25%;
            &.n-wall-false {
                border-top: 1px solid black;
            }
            &.e-wall-false {
                border-right: 1px solid black;
            }
            &.s-wall-false {
                border-bottom: 1px solid black;
            }
            &.w-wall-false {
                border-left: 1px solid black;
            }
        }
    }
`
