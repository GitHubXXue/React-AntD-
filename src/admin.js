import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import { GlobalStyle } from './style/reset';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  AppDiv
} from './style/common.js';

class Admin extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppDiv>
          <Row className="container">
            <Col span={4} className="nav-left">
              <NavLeft />
            </Col>
            <Col span={20} className="main">
              <Header />
              <Row className="content">
                {this.props.children}
              </Row>
              <Footer />
            </Col>
          </Row>
        </AppDiv>
      </Fragment>
    );
  };
}

export default Admin;
