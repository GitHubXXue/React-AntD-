import React, { PureComponent } from 'react';
import { Card, Form, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    console.log(info, "66")
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { // label 的
        xs: 24,
        sm: 4
      },
      wrapperCol: { // 对应lable 的 表单控件的 
        xs: 24,
        sm: 12
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal" {...formItemLayout}>
            <FormItem label="用户名">
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem label="密码">
              {
                getFieldDecorator('userPwd', {
                  initialValue: ''
                })(
                  <Input type="password" placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem label="性别">
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄">
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="当前状态">
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select>
                    <Option value="1">咸鱼一条</Option>
                    <Option value="2">风华浪子</Option>
                    <Option value="3">北大才子一枚</Option>
                    <Option value="4">百度FE</Option>
                    <Option value="5">创业者</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好">
              {
                getFieldDecorator('interest', {
                  initialValue: ['2', '5']
                })(
                  <Select mode="multiple">
                    <Option value="1">游泳</Option>
                    <Option value="2">打篮球</Option>
                    <Option value="3">踢足球</Option>
                    <Option value="4">跑步</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">骑行</Option>
                    <Option value="7">桌球</Option>
                    <Option value="8">麦霸</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚">
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日">
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-08-08')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址">
              {
                getFieldDecorator('address', {
                  initialValue: '北京市海淀区奥林匹克公园'
                })(
                  <TextArea
                    autoSize={rowObject}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间">
              {
                getFieldDecorator('time')(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label="头像">
              {
                getFieldDecorator('userImg', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg ? <img src={this.state.userImg} alt='' width="128" height="128" /> : uploadButton}
                  </Upload>
                )
              }
            </FormItem>
            <Form.Item label="Upload">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>,
              )}
            </Form.Item>

            <Form.Item label="Dragger">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>,
              )}
            </Form.Item>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('readOver', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>我已阅读过<a href="/">慕课协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister);
