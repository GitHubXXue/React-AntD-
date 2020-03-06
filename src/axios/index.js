import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
import Utils from '../utils';

export default class Axios {
  //针对表格查询的方法 没办法直接使用下方的ajax  查询是需要对业务逻辑进行处理的，所以不能够直接调用ajax,
  //因为下方是对所有请求的一个拦截，不会对业务代码进行处理，只会说对一些状态值进行判断和拦截 
  // 请求列表进行使用的方法
  static requestList(_this, url, params, isMock) {
    var data = {
      params: params,
      isMock // 后期的扩展 前期开发传true 真正和后端调试的时候 把这个值直接删除就可以了
    }
    this.ajax({
      url,
      data
    }).then((res => { //
      let data = res.data
      if (data && data.data) {
        data.data.list.map((item, index) => {  // antd 规范里面要求每个组件最好都要有一个key 值，有了这个key 值 我们的页面呢就会少很多的警告
          return item.key = index; //一定要记得return   return之后才能返回一个全新的对象，不return  实际上还是返回的老的
        })
        this.setState({
          list: data.data.list,
          pagination: Utils.pagination(res, (page, pageSize) => {  // res: 当前接口返回的值传递过去   callback ：主要是用于 当前页码换的时候  可以回调掉到下一次
            _this.params.page = page; // 参数页码的复制
            _this.params.pageSize = pageSize;
            _this.requestList(); // 重新请求列表 
          })
        })
      }
    }))
  }

  // JSONP 
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response);
        } else {
          reject(response.messsage);
        }
      })
    })
  }

  //公共机制的统一拦截
  static ajax(options) { // 本次核心的一个模块  作为所有请求的一个入口
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }
    let baseApi = '';
    if (options.isMock) { // 根据你是否有isMock  加载不同的Api  小技巧
      baseApi = 'http://rap2api.taobao.org/app/mock/240246';
    } else {
      baseApi = 'http://rap2api.taobao.org/app/mock/240246';
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method,
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }
        if (response.status === 200) { // http 请求自身
          let res = response.data;
          if (res.code === 0) { // 业务代码给他定义的是0  后台接口从业务层面给他定义的0  表示成功
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.msg // 获取报错信息额结果
            })
          }
        } else {
          reject(response.data);
        }
      })
    });
  }
}