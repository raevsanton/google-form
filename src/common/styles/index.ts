import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { colors } from '../constants/colors';
import { Fonts } from '../constants/theme/fonts';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    height: 100%;
    width: 100%;
  }

  body {
    ${Fonts};
    background-color: ${colors.pink};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0 auto;
    height: 100%;
    max-width: 640px;
    padding: 12px;
  }

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  
  footer {
    display: flex;
    justify-content: end;
  }
`;
