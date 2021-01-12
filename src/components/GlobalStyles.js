import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   html{
      &::-webkit-scrollbar{
         width: 0.5rem;
      }
      &::-webkit-scrollbar-thumb{
         background-color: darkgrey;
      }
      
      &::-webkit-scrollbar-track {
         background: white;
      }
   }

   body{
      font-family: 'Montserrat', sans-serif;
      width: 100%;
   }

   h2{
      font-size: 3rem;
      font-family: 'Abril Fatface', cursive;
      font-weight: lighter;
      color: #669966;
   }

   h3{
      font-size: 1.4 rem;
      color:#333;
      padding: 1rem 0rem;
   }
   
   p{
      font-size: 1.2rem;
      line-height: 200%;
      color: #6b6969;
   }

   a{
      text-decoration: none;
      color: #333;
   }

   img {
      display: block;
   }

`;

export default GlobalStyles;