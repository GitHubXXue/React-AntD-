
import React from 'react'; // 凡是我们使用到react 的语法都必须引入react
import { Select } from 'antd'
const Option = Select.Option;

const CURRENT_USER_KEY = 'current-user';
const sessionStorage = window.sessionStorage;

export default {
  // 时间格式化
  formateDate(time) {
    if (!time) return '';
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  },

  // 分页
  pagination(res, callback) { // res: 当前接口返回的值传递过去   callback ：主要是用于 当前页码换的时候  可以回调掉到下一次 
    return {
      // 页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize) （左右箭头 和 快速跳转至某一页的回调）
      onChange: (page, pageSize) => { // 当你切换页码的时候  我需要知道你切换到哪一页去了  page 当前是第几页 
        callback(page, pageSize)
      },
      showTotal: () => { //用于显示数据总量和当前数据顺序	Function(total, range)
        return `共${res.data.total}条`
      },
      current: res.data.page,
      pageSize: res.data.pageSize,
      total: res.data.total,
      showSizeChanger: true, // 是否可以改变pageSize  boolean 
      onShowSizeChange: (page, pageSize) => { //pageSize 变化的回调 Function(current, size)
        callback(page, pageSize)
      },
      showQuickJumper: true //是否可以快速跳转至某页 boolean | { goButton: ReactNode }
    }
  },

  // 搜索表单封装 -> 遍历formList 的list 变为OptionList，封装
  getOptionList(data) { // data -> 是一个数组 
    if (!data) {
      return [];
    }
    let options = [] //[<Option value="0" key="all_key">全部</Option>];  默认有一个全部的选项 key 不重复即可
    data.map((item) => { // 箭头函数 一层就是renturn  加了大括号就是执行了。直接写个值 就是直接renturn  回去。
      return options.push(<Option value={item.id} key={item.id}>{item.name}</Option>) // {item.name} js对象用大括号去包住他 这里也需要使用大括号
    })
    return options; // 将结果  必须要return  出去   否则 接收不到  
  },

  //==============================

  // 格式化金额,单位:分(eg:430分=4.30元)
  formatFee(fee, suffix = '') {
    if (!fee) {
      return 0;
    }
    return Number(fee).toFixed(2) + suffix;
  },

  // 隐藏手机号中间4位
  formatPhone(phone) {
    phone += '';
    return phone.replace(/(\d{3})\d*(\d{4})/g, '$1****$2')
  },

  // 格式化公里（eg:3000 = 3公里）
  formatMileage(mileage, text) {
    if (!mileage) {
      return 0;
    }
    if (mileage >= 1000) {
      text = text || " km";
      return Math.floor(mileage / 100) / 10 + text;
    } else {
      text = text || " m";
      return mileage + text;
    }
  },

  // 隐藏身份证号中11位
  formatIdentity(number) {
    number += '';
    return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
  },

  /**
     * ETable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
  updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
    if (selectedIds) {
      this.setState({
        selectedRowKeys,
        selectedIds: selectedIds,
        selectedItem: selectedRows
      })
    } else {
      this.setState({
        selectedRowKeys,
        selectedItem: selectedRows
      })
    }
  },

  /**
 * 设置当前用户信息
 */
  setLoginUser(currentUser = {}) {
    // 将用户属性在这里展开，方便查看系统都用到了那些用户属性
    const { id, name, avatar, token, permissions } = currentUser;
    const userStr = JSON.stringify({
      id,             // 用户id 必须
      name,           // 用户名 必须
      avatar,         // 用头像 非必须
      token,          // 登录凭证 非必须 ajax请求有可能会用到，也许是cookie
      permissions,    // 用户权限
    });
    sessionStorage.setItem(CURRENT_USER_KEY, userStr);
  },
};
