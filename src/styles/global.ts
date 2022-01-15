import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    :root{
        --purple:#512F82;
        --acquaGreen:#37CCBD;
        --darkAcquaGreen:#29978C;
        --white:#D9FFFD;
        --darkGrey:#2D3333;
    }
    body {
        font-family: 'Roboto Mono', monospace;
    }
    button{
        cursor: pointer;
        border:none;
        border-radius: 8px;
    }
`;
