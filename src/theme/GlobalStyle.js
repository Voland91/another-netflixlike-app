import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', 'Helvetica', sans-serif;
        background-color: #141414;
    }
`;

export default GlobalStyle;