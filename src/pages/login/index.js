import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import Banner from './banner';
import { LoginDiv } from './style'
import { actionCreators } from './store';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends PureComponent {
  state = {
    loading: false,
  };

  componentDidMount() {
    const { form: { validateFields, setFieldsValue } } = this.props;
    // 一开始禁用提交按钮
    validateFields(() => void 0);

    // 开发时方便测试，填写表单
    if (process.env.NODE_ENV === 'development') {
      setFieldsValue({ userName: 'admin', password: '111' });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          this.setState({ loading: true });
          /**
           * 加密传输用户名密码方案：
           *   1 使用https；
           *   2 使用非对称加密（RSA），后端提供公钥，前端加密，后端使用私钥解密；
           * */
          // TODO 发送请求进行登录，以下为前端硬编码，模拟请求

          const { userName, password } = values;

          // 当需要指定登陆用户时，前端可以写死
          let userA = userName === 'admin' && password === '111';
          let userB = userName === 'admin2' && password === '222';
          if (userA || userB) {
            await this.props.login('admin', '111');
            this.setState({ loading: false });
            window.location.href = '/home';

            // 跳转页面，优先跳转上次登出页面
            // const lastHref = window.sessionStorage.getItem('last-href');

            // 强制跳转 进入系统之后，需要一些初始化工作，需要所有的js重新加载
            // window.location.href = lastHref || `${ROUTE_BASE_NAME}/`;
            // this.props.history.push(lastHref || '/');
          } else {
            message.error('用户名：admin 密码：111')
            this.setState({ loading: false });
          }
        } catch (err) {
          console.log(err);
        }
      }
    })
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError, // 获取对应字段名的错误信息 string
      isFieldTouched, // 检查对应字段是否被用户操作过 boolean
      getFieldsValue,
    } = this.props.form;
    const { loading } = this.state;

    const { userName, password } = getFieldsValue();

    // Only show error after a field is touched. 仅在触摸字段后显示错误。
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    if (this.props.loginStatus === '0') {
      return (
        <LoginDiv>
          <Helmet title="欢迎登陆" />
          <div className="left">
            <Banner />
          </div>
          <div className="right">
            <div className="box">
              <div className="header">欢迎登陆</div>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  validateStatus={userNameError ? 'error' : ''} //校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'
                  help={userNameError || ''} // 提示信息，如不设置，则会根据校验规则自动生成
                >
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名' }],
                  })(
                    <Input allowClear autoFocus prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" size="large" />
                  )}
                </FormItem>
                <FormItem
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码' }],
                  })(
                    <Input.Password prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="密码" size="large" />
                  )}
                </FormItem>
                <Button
                  className="submit-btn"
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                  size="large"
                >
                  登录
                </Button>
              </Form>
              <div className="tip">
                <span>用户名：{userName} </span>
                <span>密码：{password}</span>
              </div>
            </div>
          </div>
        </LoginDiv>
      )
    } else {
      return <Redirect to='/' />;
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'userToken'])
})

const mapDispatch = (dispatch) => ({
  login: (userName, password) => dispatch(actionCreators.localLogin(userName, password)),

})

export default connect(mapState, mapDispatch)(Form.create()(withRouter(Login)));