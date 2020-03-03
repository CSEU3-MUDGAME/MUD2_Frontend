import styled from 'styled-components'

export const StyledSidebar = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    .game-data, .controls, .players {
        margin: 2rem 0;
        border: 1px solid black;
    }
`