import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import { GlobalStyle } from './style/reset';
import Header from './components/Header';
import {
  AppDiv
} from './style/common.js';

class Common extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppDiv>
          <Row className="simple-page">
            <Header menuType="second" /> 
            {
              // menuType="second"  控制头部可以称之为二级导航 小导航 .头部组件复用
            }
          </Row>
          <Row className="content"> 
            {this.props.children} 
          </Row>
        </AppDiv>
      </Fragment>
    );
  };
}

export default Common;

