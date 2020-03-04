import styled from 'styled-components'

export const StyledSidebar = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    .controls, .players {
        margin: 2rem 0;
        border: 1px solid black;
    }
    .game-data{
        margin: 0 0 2rem 0;
        border: 1px solid black;
    }
`