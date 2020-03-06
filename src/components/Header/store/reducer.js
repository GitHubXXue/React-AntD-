import * as constants from "./constants"
import { fromJS } from "immutable";

const defaultState = fromJS({
  userName: '吴冬雪',
  sysTime: '',
  dayPictureUrl: '',
  weather: '',
  title: '首页',
});

const changeWeatherAPIData = (state, action) => {
  return state.merge({
    dayPictureUrl: fromJS(action.dayPictureUrl),
    weather: fromJS(action.weather)
  })
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_SYS_TIME:
      return state.set('sysTime', fromJS(action.sysTime));
    case constants.SET_WEATHER_API_DATA:
      return changeWeatherAPIData(state, action);
    case constants.SET_HEADER_TITLE:
      return state.set('title', fromJS(action.title));
    default:
      return state;
  }
}