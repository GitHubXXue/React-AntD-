
import React from 'react'; // 凡是我们使用到react 的语法都必须引入react
import { Select } from 'antd'
const Option = Select.Option;

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

  // 遍历formList 的list 变为OptionList，封装
  getOptionList(data) {
    if (!data) {
      return [];
    }
    let options = [] //[<Option value="0" key="all_key">全部</Option>];  默认有一个全部的选项 key 不重复即可
    data.map((item) => {
      options.push(<Option value={item.id} key={item.id}>{item.name}</Option>) // {item.name} js对象用大括号去包住他 这里也需要使用大括号
    })
    return options; // return 
  },
};
