import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    display: block;
    color: red;
    top: 0;
    position: fixed;
    padding: 16px 0 13px 0;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    background-color: white;

    .logo{
      font-family: 'Archivo Black', sans-serif;
      font-weight: 600;
      font-size: 40px;
    }

   ul {
    padding: 0;
    max-width: 900px;
    display: flex;
    list-style: none;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }

  ul > li {
    margin-right: 30px;
  }

  ul li:first-child{
    text-align: center;
    min-width: inherit;
  }

  ul li a{
    color: #000;
    text-decoration: none;
    font-size: 15px;
  }

  ul li:last-of-type{
    margin: 0;
  }


  @media only screen and (max-width: 600px) {
    ul {
      display: block;
    }
    ul li ul li{
      padding: 0 10px;
      text-align: center;
      width: 100%;
    }
  }

`;
