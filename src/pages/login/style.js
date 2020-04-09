import styled from 'styled-components';
import loginBg from './banner/login-bg.jpg';

export const LoginDiv = styled.div`

  display: flex;
  background-image: url(${loginBg});
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-position: center;
  overflow: hidden;

  .left {
    flex: 1;
  }

  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 35%;
    .box {
      padding: 16px 50px;
      width: 70%;
      background: #f8f8f8;
      border-radius: 20px;
      .header {
        font-size: 20px;
        text-align: center;
        padding: 20px 0 30px;
      }
      .submit-btn {
        width: 100%;
      }
      .tip {
        color: #ccc;
        text-align: center;
        padding-top: 15px;
        span {
          margin-right: 8px;
        }
      }
    }
  }
`