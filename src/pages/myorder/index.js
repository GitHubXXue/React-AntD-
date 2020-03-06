import React, { PureComponent } from 'react';
import { Card, Button, Table, Form, Select, Modal, DatePicker, message } from 'antd';
import Utils from '../../utils';
import request from '../../utils/request';
import { apis } from '../../utils/apis';
import BaseForm from '../../components/BaseForm';
import axios from '../../axios';
const FormItem = Form.Item; //  不定义会报错
const Option = Select.Option;
const { RangePicker } = DatePicker;

export default class Order extends PureComponent {
  state = {
    orderInfo: {},
    orderConfirmVisble: false
  }
  params = {
    page: 1,
    pageSize: 10,
  }
  formList = [ // 定义好之后我们只需要去解析这样一个结构就够了  相当于把一个表单对象化变成一个结构化的东西，我们解析这个结构就能够生成一个全新的表单
    // 拿到这个formList  我们怎么去遍历和解析他呢。需要把他传递给BaseForm
    {
      type: 'SELECT',
      label: '城市',
      field: 'city_id',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京市' }, { id: '2', name: '天津市' }, { id: '3', name: '深圳市' },]
    },
    {
      type: '时间查询' // 检测到如果type叫做时间查询 我们直接去给你封装两个组件
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'op_mode',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
    }
  ]
  componentDidMount() {
    this.requestList()
  }

  // 接收BaseForm 返回值
  handleFilter = (params) => {
    this.params = params;
    this.requestList();
  }

  //请求表格数据
  requestList = () => {
    let _this = this;
    axios.requestList(this, apis.getOrderManageList, this.params, true)
    // request.post(apis.getOrderManageList, {
    //   page: this.params.page,
    //   pageSize: this.params.pageSize
    // }).then((res) => {
    //   let data = res.data
    //   if (data.code === 200) {
    //     data.data.list.map((item, index) => {  // antd 规范里面要求每个组件最好都要有一个key 值，有了这个key 值 我们的页面呢就会少很多的警告
    //       return item.key = index; //一定要记得return   return之后才能返回一个全新的对象，不return  实际上还是返回的老的
    //     })
    //     this.setState({
    //       list: data.data.list,
    //       pagination: Utils.pagination(res, (page, pageSize) => {  // res: 当前接口返回的值传递过去   callback ：主要是用于 当前页码换的时候  可以回调掉到下一次
    //         _this.params.page = page; // 参数页码的复制
    //         _this.params.pageSize = pageSize;
    //         _this.requestList(); // 重新请求列表 
    //       })
    //     })
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
  };
  // 行 选中 点击函数
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  // 结束订单
  handleConfirm = () => {
    let item = this.state.selectedItem;
    if (!item || JSON.stringify(item) === '{}') {
      message.warning('请选择一条订单进行结束');
      return;
    }
    request.post(apis.endOrderInfor, {
      orderId: item.id
    }).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          orderInfo: res.data.data.list[0], // 获取选中结束订单的记录 的信息
          orderConfirmVisble: true //弹出对话框
        })
      }
    })
  }
  // 结束订单确认
  handleFinishOrder = () => {
    let item = this.state.selectedItem;
    request.post(apis.confirmCloseOrder, {
      orderId: item.id
    }).then((res) => {
      if (res.data.code === 200) {
        message.success('订单结束成功')
        this.setState({
          orderConfirmVisble: false,
          selectedRowKeys: [], // 清除勾选
          selectedItem: {}
        })
        this.requestList();
      }
    })
  }
  // 订单详情
  openOrderDetail = () => {
    let item = this.state.selectedItem;
    if (!item || JSON.stringify(item) === '{}') {
      message.warning('请先选择一条订单');
      return;
    }
    // 只有选择订单我才允许你跳转页面
    //window.open 打开新窗口
    window.open(`/#/common/order/detail/${item.id}`, '_blank') // 打开新页面  本身是hash路由 ，只要路径正确的 我们就可以实现路由的陶砖
  }
  render() {
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'order_sn' // 索引是要完全的按照接口的返回来进行实现的
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },
      {
        title: '手机号', // 实际上手机号码是加密的  屏蔽中间的四位
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',  // 里转换成公里
        render(distance) {
          return distance / 1000 + 'Km';
        }
      },
      {
        title: '行驶时长', //秒转换成小时单位  也会涉及一个公共机制的封装
        dataIndex: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',  // fee  费用
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额', //  实付 = 订单金额 - 优惠券
        dataIndex: 'user_pay'
      }
    ];
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio', // 多选/单选，checkbox or radio
      selectedRowKeys //指定选中项的 key 数组，需要和 onChange 进行配合
    };
    const formItemLayout = { //结束订单弹框
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    }
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button type="primary" style={{ marginLeft: 10 }} onClick={this.handleConfirm}>结束订单</Button>
        </Card>
        <div className="ant-table-contentWrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection} //表格行是否可选择，配置项
            onRow={(record, index) => { //设置行属性
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </div>
        <Modal
          title="结束订单"
          visible={this.state.orderConfirmVisble}
          onCancel={() => {
            this.setState({
              orderConfirmVisble: false
            })
          }}
          onOk={this.handleFinishOrder}
          width={600}
        >
          <Form layout="horizontal">
            <FormItem label="车辆编号" {...formItemLayout}>
              {this.state.orderInfo.bike_sn}
            </FormItem>
            <FormItem label="剩余电量" {...formItemLayout}>
              {this.state.orderInfo.battery + '%'}
            </FormItem>
            <FormItem label="行程开始时间" {...formItemLayout}>
              {this.state.orderInfo.start_time}
            </FormItem>
            <FormItem label="当前位置" {...formItemLayout}>
              {this.state.orderInfo.location}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

class FilterForm extends PureComponent {
  // 搜索查询按钮
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };
  // 重置表单按钮 
  handleReset = () => {
    this.props.form.resetFields();
  };
  render() {
    const { getFieldDecorator } = this.props.form; // 包装组件实现双向数据绑定的功能
    return (
      <Form layout="inline" onSubmit={this.handleSearch}>
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select
                style={{ width: 100 }}
                placeholder="Select"
              >
                {
                  //formList--> Option传递  我们需要把值传过去，重新包装成一个对象的形式帮助我们去完成 
                }
                <Option value="">全部</Option>
                <Option value="北京市">北京市</Option>
                <Option value="天津市">天津市</Option>
                <Option value="深圳市">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="订单时间">
          {
            getFieldDecorator('order_time')(
              <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            )
          }
        </FormItem>
        <FormItem label="订单状态">
          {
            getFieldDecorator('op_mode')(
              <Select
                style={{ width: 80 }}
                placeholder="Select"
              >
                <Option value="">全部</Option>
                <Option value="进行中">进行中</Option>
                <Option value="进行中（临时锁车）">进行中（临时锁车）</Option>
                <Option value="行程结束">行程结束</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ margin: '0 20px' }} htmlType="submit">查询</Button>
          {
            // 点击查询 需要把值从BaseForm  传递回来
          }
          <Button onClick={this.handleReset}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm);