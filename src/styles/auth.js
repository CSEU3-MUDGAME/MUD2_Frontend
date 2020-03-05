import styled from 'styled-components'

export const AuthStyle = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        input {
            margin: 20px auto;
            width: 300px;
            padding: 15px;
            border: 5px solid none;
            background-color: lightblue;
            color: black;
            font-size: 16px;
        }

        button {
            width: 100px;
            margin: 0 auto;
            padding: 10px 25px;
            font-size: 25px;
            border-radius: 8px;
            font-family: 'zorque', sans-serif;
        }

        button:hover {
            background-color: black;
            color: white;
            transition-duration: 0.4s;
        }

        h1 {
            font-style:italic
        }

        span {
            text-decoration:underline;
            color:#e25822
        }
`