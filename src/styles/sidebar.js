import styled from 'styled-components'

export const StyledSidebar = styled.div`
    height: 600px;
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: space-between;
    .controls, .players {
        border: 4px solid #a52929;
    }
    .game-data {
        margin: 0 0 1.5rem 0;
        border: 4px solid #a52929;
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
        .dirs {
            p {
                margin: 0;
            }
        }
    }
    .players {
        overflow: hidden;
        padding: 1rem;
    }
    .controls {
        padding: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
        .row {
            display: flex;
            justify-content: center;
            .empty, img {
                width: 30px;
                height: 30px;
            }
            img {
                border-radius: 50%;
                border: 5px solid #fdd360;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`