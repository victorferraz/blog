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



  h1 {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    padding: 40px 0 10px 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.84);
    font-size: 50px;
    line-height: 48px;
    font-weight: bold;
  }

  h2{
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0 10px 0;
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

  ul{
    margin-bottom: 20px;
  }

  main a{
    color: #333;
    text-decoration: none;
  }
  main article p a{
    text-decoration: underline;
  }

  main a:hover{
    color: #666;

  }

  article img.post{
    max-width: 100%;
  }


  article ul{
    list-style: disc;
  }

  pre{
    padding: .66001rem 9.5px 9.5px;
    line-height: 2rem;
    background: linear-gradient(to bottom,#fff 0,#fff .75rem,#f5f7fa .75rem,#f5f7fa 2.75rem,#fff 2.75rem,#fff 4rem);
    background-size: 100% 4rem;
    font-family: monospace,monospace;
    display: block;
    margin: 0 0 10px;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }

  code{
    color: red;
  }


`;
export default GlobalStyles;
