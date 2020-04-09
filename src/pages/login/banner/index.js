import React, { Component } from 'react';
import loginBanner from './login_banner.png';
import circle from './circle.png';
import folder from './folder.png';
import folder_grey from './folder_grey.png';
import text from './text.png';
import info from './info.png';
import star from './star.png';
import bar from './bar.png';
import { BannerDiv } from './style';

export default class Banner extends Component {
  render() {
    return (
      <BannerDiv>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <i>React Manage System</i>
        </div>
        <div className="banner">
          <div className="banner-image-container">
            <img src={loginBanner} alt="宣传图" />
            <div className="star">
              <img alt="star" src={star} />
            </div>
            <div className="star2">
              <img alt="star" src={star} />
            </div>
            <div className="text">
              <img alt="text" src={text} />
            </div>

            <div className="folder_grey">
              <img alt="folder_grey" src={folder_grey} />
            </div>
            <div className="folder2">
              <img alt="folder" src={folder} />
            </div>
            <div className="folder">
              <img alt="folder" src={folder} />
            </div>
            <div className="info">
              <img alt="info" src={info} />
            </div>
            <div className="circle_b">
              <img alt="circle" src={circle} />
            </div>
            <div className="circle2">
              <img alt="circle" src={circle} />
            </div>
            <div className="circle">
              <img alt="circle" src={circle} />
            </div>
            <div className="bar_z">
              <img alt="bar" src={bar} />
            </div>
          </div>
        </div>
      </BannerDiv>
    );
  }
}
