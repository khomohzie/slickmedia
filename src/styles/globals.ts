import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        text-decoration: none;
    }
    
    html, body {
        margin: 0;
        font-family: DM Sans, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ffffff;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        overflow-x: hidden;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export default GlobalStyles;
