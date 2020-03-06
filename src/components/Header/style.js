import styled from 'styled-components';
import { colorAll } from '../../style/default';

export const HeaderDiv = styled.div`
  background-color:${colorAll.colorM};
  .header-top {
    height:60px;
    line-height:60px;
    padding:0 20px;
    text-align:right;
    .logo{
      line-height: 60px;
      text-align: left;
      font-size: 18px;
      img{
        height: 40px;
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
      }
    }
    a {
      margin-left:40px;
    }
  }
  .breadcrumb {
    height:45px;
    line-height:40px;
    padding:0 20px;
    border-top:1px solid ${colorAll.colorA};
    .breadcrumb-title {
      text-align:center;
      font-size:${colorAll.fontC};
      line-height:45px;
      position:relative;
      &:after{
        position:absolute;
        content:'';
        left:50%;
        top:44px;
        margin-left:-12px;
        border-top:9px solid ${colorAll.colorM};
        border-left:12px solid transparent;
        border-right:12px solid transparent;
      }
    }
    .weather {
      text-align:right;
      font-size:14px;
      .data {
        margin-right:20px;
        vertical-align:middle;
      }
      .weather-img {
        img {
          height:15px;
          vertical-align:middle;
        }
      }
      .weather-detail {
        margin-left:10px;
        vertical-align:middle;
      }
    }
  }
`;