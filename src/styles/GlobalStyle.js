import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        background-color: #f6f6f6;
    }
    a{
        font-family: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyle;
