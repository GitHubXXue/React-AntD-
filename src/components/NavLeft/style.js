import styled from 'styled-components';
import { colorAll } from '../../style/default';

export const NavLeftDiv = styled.div`
  .logo {
    line-height: 90px; 
    background-color: ${colorAll.colorS};
    text-align:center;
    img {
      height:35px;
      display:inline-block;
      vertical-align: middle;
    }
    h1{
      margin-left:10px;
      color: ${colorAll.colorM};
      font-size: 20px;
      display:inline-block;
      vertical-align: middle;
    }
  }
`;