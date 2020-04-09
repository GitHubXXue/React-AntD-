import { fromJS } from 'immutable';
import * as constants from "./constants"
import storageUtils from '../../../utils/storageUtils'

const defaultState = fromJS({
  userName: storageUtils.getCookie('userName'),
  userToken: storageUtils.getCookie('userToken') // 决定用户是否登陆
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.merge({
        userName: action.userName,
        userToken: action.userToken
      })
    case constants.SETLOGINUSER:
      return state.set('userToken', action.value)
    default:
      return state;
  }
}