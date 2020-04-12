import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
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
    padding: 40px 0 00px 0;
    margin: 0;
    font-family: 'Libre Baskerville', serif;
    color: rgba(0, 0, 0, 0.84);
    font-size: 40px;
    line-height: 48px;
    font-weight: 300;
  }

  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    font-weight: 300;
    margin: 10px 0 10px 0;
  }

  h2.sub-text{
    color: rgba(0, 0, 0, 0.54);
    line-height: 32px;
    font-size: 24px;
  }

  main{
    max-width: 680px;
    margin: 100px auto 0 auto;
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
    background-color: rgba(250, 204, 61, 1);
    border-bottom-color:rgb(177, 136, 0);
    border-bottom-style:solid;
    border-bottom-width:1px;
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
    padding: 20px 0 40px 0;
    max-width: 100%;
  }
`;
export default GlobalStyles;
