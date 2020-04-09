import styled from 'styled-components';
import { colorAll } from './default';

export const AppDiv = styled.div`
  ul,li{
    list-style: none;
  }
  .clearfix{ // 清楚浮动
    &::after{
        content:' ';
        clear:both;
        display: block; 
        visibility: hidden; //不隐藏掉实际上会有一个占位  在页面上会看到这样一个元素  只是没有值而已
    }
  }
  .container{
    .nav-left{
      height:calc(100vh);
      background-color: #001529;
    }
    .main{
      height: calc(100vh);
      background-color:${colorAll.colorL};
      overflow: auto;
    }
    .content {
      position: relative;
      padding: 20px;
    }
  }

  // card 样式
  .card-wrap{
    margin-bottom: 10px;
    button{ 
        margin-right: 10px;
    }
  }

  // 表格框架布局封装
  .ant-table-contentWrap{
    background: #ffffff;
    border: 1px solid #e8e8e8;
    margin-top: -3px;
    .ant-table-wrapper{
      margin-left: -1px;
      margin-right: -2px;
    }
  }
  // common 页面简单头
  .simple-page{
    .header-top{
      background:#1890ff;
      color:${colorAll.colorM};
      a {
        color:yellow;
      }
    }
  }
`;
