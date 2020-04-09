import * as constants from "./constants"
import storageUtils from '../../../utils/storageUtils'
import axios from '../../../axios';
import { apis } from '../../../utils/apis';

const changeLogin = (userName, userToken) => ({
  type: constants.CHANGE_LOGIN,
  userName,
  userToken
});

export const localLogin = (userName, password) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.ajax({
        url: apis.login,
        method: 'post',
        data: {
          userName,
          password
        }
      })
      const userToken = response.data.data.token
      dispatch(changeLogin(userName, userToken))  //保存在内存中
      storageUtils.setCookie({ userName, userToken }, 1)
    } catch (error) {
      console.log(error)
    }
  }
}

export const setLoginUser = (userToken) => ({
  type: constants.SETLOGINUSER,
  value: userToken
});

export const logout = () => {
  return async (dispatch, getState) => {
    try {
      storageUtils.removeCookie('userToken');
      dispatch(changeLogin('0', '0'))
      window.location = '/login';
    } catch (e) {
      console.log(e);
    }
  }
}