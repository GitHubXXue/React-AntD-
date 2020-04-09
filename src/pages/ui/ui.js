import styled from 'styled-components';

export const Div = styled.div`
/* modals */
/* use css to set position of modal */
.vertical-center-modal {
    text-align: center;
    white-space: nowrap;
  }
  
  .vertical-center-modal:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
  }
  
  .vertical-center-modal .ant-modal {
    display: inline-block;
    vertical-align: middle;
    top: 0;
    text-align: left;
  }

/* For demo 轮播*/
.ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
} 

.ant-carousel .slick-slide h3 {
  color: #fff;
}
.slider-wrap .ant-carousel .slick-slide{
  height: 240px!important;
}
.slider-wrap img{
  width:100%;
}
`;
