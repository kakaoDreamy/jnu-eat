import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

element.style {
    overflow: scroll;
}
html, body {
    height: 100%;
}
body {
    background-color: var(--gray-background);
}
* {
    font-family: 'Noto Sans KR', sans-serif;
    color: var(--black-default);
    font-style: normal;
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
    box-sizing: border-box;
    letter-spacing: -0.4px;
}



`;

export default GlobalStyle;
