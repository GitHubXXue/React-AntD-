
import store from 'store'
// import Cookies from 'js-cookie'
const USER_KEY = 'user_key'

export default {
  /*
  * 进行local数据存储管理的工具模块
  * */
  //保存 storageUtils.saveUser(userName)
  saveUser(user) {
    // localStorage.setItem(USER_KEY,JSON.stringify(user))
    store.set(USER_KEY, JSON.stringify(user))
  },
  //读取
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || ''
  },
  //删除
  deleteUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  },

  /*
  * 进行Cookie数据存储管理的工具模块
  * setCookie(属性名，值，过期时间)
  * getCookie(属性名)
  * */
  setCookie(json, time) {
    let settime = new Date(new Date().getTime() + time * 365 * 24 * 60 * 60 * 1000).toUTCString;
    for (let key in json) {
      document.cookie = `${key}=${json[key]};expires=${settime}}`
    }
  },
  getCookie(attr) {
    let arr = document.cookie.match(new RegExp("\\b" + attr + "=([^;]+)(;|$)"));
    return arr ? arr[1] : '0'
  },
  removeCookie(attr) {
    let json = {};
    json[attr] = '0';
    console.log(json, "jjjjjj")
    this.setCookie(json, -2)
  },

  // setCookie(key, value) {
  //   return Cookies.set(key, value)
  // },
  // getCookie(key) {
  //   return Cookies.get(key)
  // },
  // removeCookie(key) {
  //   return Cookies.remove(key)
  // }
}


