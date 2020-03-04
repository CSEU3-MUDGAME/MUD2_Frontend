import styled from 'styled-components'

export const StyledSidebar = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    .controls, .players {
        margin: 1.5rem 0;
        border: 4px solid #a52929;
    }
    .game-data {
        margin: 0 0 1.5rem 0;
        border: 4px solid #a52929;
        padding: 2rem;
    }
    .players {
        overflow: hidden;
        padding: 1rem;
    }
    .controls {
        padding: 2rem;
        .row {
            display: flex;
            justify-content: center;
            .empty, img {
                width: 35%;
                height: 100px;
            }
            img {
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`