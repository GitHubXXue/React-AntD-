import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import {
  HeaderDiv,
} from './style';
import Util from '../../utils';
import { actionCreators } from "./store";

class Header extends PureComponent {

  render() {
    const { userName, sysTime, dayPictureUrl, weather, title, menuType } = this.props;
    return (
      <HeaderDiv>
        <Row className="header-top">
          {
            menuType ?
              <Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <span>IMooc 通用管理系统</span>
              </Col> : ''
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{userName}</span>
            <a href="./">退出</a>
          </Col>
        </Row>
        {
          menuType ? '' : //  menuType 面包屑主要是应用我们的主导航  主页面 不是给我们的二级导航使用的    
            <Row className="breadcrumb">
              <Col span={4} className="breadcrumb-title">
                {title}
              </Col>
              <Col span={20} className="weather">
                <span className="data">{sysTime}</span>
                <span className="weather-img">
                  <img src={dayPictureUrl} alt="" />
                </span>
                <span className="weather-detail">
                  {weather}
                </span>
              </Col>
            </Row>
        }
      </HeaderDiv>
    );
  };

  componentDidMount() {
    setInterval(() => {
      this.props.getSysTitme();
    }, 1000)
    this.props.WeatherAPIData();
  }
}

const mapState = (state) => ({
  userName: state.getIn(['header', 'userName']),
  sysTime: state.getIn(['header', 'sysTime']),
  dayPictureUrl: state.getIn(['header', 'dayPictureUrl']),
  weather: state.getIn(['header', 'weather']),
  title: state.getIn(['header', 'title']),
});

const mapDispatch = (dispatch) => ({
  getSysTitme() {
    let newTime = Util.formateDate(new Date().getTime());
    dispatch(actionCreators.setSysTime(newTime))
  },
  WeatherAPIData() {
    let city = '北京';
    dispatch(actionCreators.getWeatherAPIData(city))
  }
});

export default connect(mapState, mapDispatch)(Header);
