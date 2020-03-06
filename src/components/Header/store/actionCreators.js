import * as constants from "./constants"
// import axios from '../../../axios';

const setWeatherAPIData = (dayPictureUrl, weather) => ({
  type: constants.SET_WEATHER_API_DATA,
  dayPictureUrl,
  weather
});

export const setSysTime = (newTime) => ({
  type: constants.SET_SYS_TIME,
  sysTime: newTime
});

export const getWeatherAPIData = (city) => {
  return (dispatch) => {
    // axios.jsonp({
    //   url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    // }).then((res) => {
    //   if (res.status === 'success') {
    //     let data = res.results[0].weather_data[0];
    //     dispatch(setWeatherAPIData(data.dayPictureUrl, data.weather))
    //   }
    // })
    dispatch(setWeatherAPIData('', ''))
  }
};

export const setHeaderTitle = (title) => ({
  type: constants.SET_HEADER_TITLE,
  title
});
