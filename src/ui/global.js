import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'hk_groteskbold';
    src: url('/fonts/hkgrotesk-bold-webfont.woff2') format('woff2'),
         url('/fonts/hkgrotesk-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 21px;
    font-weight: 300;
    line-height: 33px;
  }



  .logo{
    font-family: 'Archivo Black', sans-serif;
    font-weight: 600;
    font-size: 40px;
  }

  h1 {
    font-family: 'hk_groteskbold';
    padding: 40px 0 10px 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.84);
    font-size: 50px;
    line-height: 48px;
    font-weight: bold;
  }

  h2{
    font-size: 30px;
    font-weight: 300;
    margin: 10px 0 20px 0;
  }

  h2.sub-text{
    color: rgba(0, 0, 0, 0.54);
    line-height: 32px;
    font-size: 24px;
  }

  ul {
    padding-left: 20px;
  }

  p, li, code{
    font-size: 20px;
    margin-bottom: 20px;
  }

  li{
    margin-bottom: 0;
  }

  header{
    width: 100%;
    display: block;
    color: red;
    top: 0;
    position: fixed;
    padding: 16px 0 13px 0;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    background-color: white;
  }

  header ul{
    max-width: 1192px;
  }

  header ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }

  header ul > li {
    margin-right: 30px;
  }

  header ul li a{
    color: #000;
    text-decoration: none;
    font-size: 15px;
  }

  ul{
    margin-bottom: 20px;
  }

  main a{
    color: #333;
    text-decoration: none;
  }

  main a:hover{
    color: #666;

  }

  article img.post{
    max-width: 100%;
  }
`;
export default GlobalStyles;
