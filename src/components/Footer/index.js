import React,{PureComponent} from 'react';
import {
  FooterDiv
} from './style';

class Footer extends PureComponent {
  render() {
    return (
      <FooterDiv>
        版权所有：共享单车后台管理系统&吴冬雪（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：吴冬雪
      </FooterDiv>
    );
  };
}

export default Footer;
