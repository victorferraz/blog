import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Spartan', sans-serif;
    color: #333;
    height: 300px;
  }

  .logo{
    font-family: 'Archivo Black', sans-serif;
    font-weight: 600;
  }

  .logo, h1{
    font-family: 'Archivo Black', sans-serif;
    font-size: 40px;
  }

  h1 {
    padding: 40px 0 00px 0;
    font-weight: 300;
  }

  h2{
    font-family: 'Archivo', sans-serif;
    font-size: 30px;
    margin: 30px 0 10px 0;
  }

  main{
    max-width: 680px;
    margin: 100px auto 0 auto;
  }

  ul {
    padding-left: 20px;
  }

  p, li, code{
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    line-height: 30px;
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
    padding: 0px 0;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    background-color: rgba(250, 204, 61, 1);
  }

  header ul{
    max-width: 680px;
  }

  header ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
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

  article img{
    padding: 20px 0 40px 0;
    max-width: 100%;
  }
`;
export default GlobalStyles;
