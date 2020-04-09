import React, { PureComponent } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from './pages/login/store';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Common from './common'
import loadable from './utils/loadable';
import PrivateRoute from './utils/privateRoute';
import Error404 from './pages/error/Error404';

//异步加载组件
const Home = loadable(() => import('./pages/home'));
const Buttons = loadable(() => import('./pages/ui/buttons'));
const Modals = loadable(() => import('./pages/ui/modals'));
const Loadings = loadable(() => import('./pages/ui/loadings'));
const Notifications = loadable(() => import('./pages/ui/notifications'));
const Messages = loadable(() => import('./pages/ui/messages'));
const Tabs = loadable(() => import('./pages/ui/tabs'));
const Gallery = loadable(() => import('./pages/ui/gallery'));
const Carousel = loadable(() => import('./pages/ui/carousel'));
const FormLogin = loadable(() => import('./pages/form/login'));
const FormRegister = loadable(() => import('./pages/form/register'));
const BasicTable = loadable(() => import('./pages/table/basicTable'));
const HighTable = loadable(() => import('./pages/table/highTable'));
const Rich = loadable(() => import('./pages/rich'));  // 富文本
const City = loadable(() => import('./pages/city'));  // 城市管理
const Order = loadable(() => import('./pages/order')); // 订单管理
const OrderDetail = loadable(() => import('./pages/order/detail')); // 订单详情
const User = loadable(() => import('./pages/user')); // 员工管理
const BikeMap = loadable(() => import('./pages/bikeMap')); // 车辆地图
const Bar = loadable(() => import('./pages/echarts/bar')); // 柱形图
const Pie = loadable(() => import('./pages/echarts/pie')); // 饼图
const Line = loadable(() => import('./pages/echarts/line')); // 折线图
const Permission = loadable(() => import('./pages/permission')); // 权限设置

class IRouter extends PureComponent {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            {
              // Redirect 路由重定向到 /home   ,他会匹配到这个路由，从而去加载我们的 /home 组件
            }
            <Route path='/' exact render={() => <Redirect to="/home" />} />
            {
              // 如果没有Switch 包的话，他会从上到下执行，挨个把这个路由执行完
              // 一旦加了Switch语法之后 ，他就会从上到下依次执行，匹配到路由之后就不会往下执行了，Switch 非常重要
              // 第一层路由 一旦访问到/login或者说/common 的时候，他都会停止 ，不会去渲染下面的， 
              // 这些路由 他只会去渲染其中的一个，不会重复的去加载多个 。
            }
            <Route path="/login" exact component={Login} />
            <Route path="/common" render={() =>
              // 这样我们就不需要考虑我们的二级导航  小导航了
              // render 的时候 匹配到一个/common 路由的时候 我们需要  renturn 或者把大括号去掉  否则是没有办法接收到数据的 一但加大括号是不会直接return  手动的return一下
              // 如果不写大括号  他会自动的帮助我们return  
              <Switch>
                <Route path="/common/order/detail/:orderId" render={() =>
                  <Common>
                    <Route component={OrderDetail} />
                  </Common>
                } />
                <Route component={Error404} />
              </Switch>
            } />
            <Route path="/" render={() =>
              // 内层去掉 /admin我们的外层也需要去掉/admin   ，外层/admin 内层没有/admin 这样的路由，这样是匹配不到的
              // 首先你前面必须有一个 /admin这样的路由 ，他才可以进来，进来之后再去根据 你的二级路由，三级路由，再去匹配对应的子路由，所以外曾的 /admin  也必须删掉
              // 内部/ui/buttons  ，前面也有一个/  和外层的/ 相同，是符合这种情况的，就可以访问到，外层必须走进来，内层才能走进来，内层和外层必须保持结构一致
              <Admin>
                <Switch>
                  <PrivateRoute path='/home' component={Home} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/buttons' component={Buttons} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/modals' component={Modals} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/loadings' component={Loadings} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/notifications' component={Notifications} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/messages' component={Messages} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/tabs' component={Tabs} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/gallery' component={Gallery} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/ui/carousel' component={Carousel} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/form/login' component={FormLogin} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/form/reg" component={FormRegister} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/table/basic" component={BasicTable} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/table/high" component={HighTable} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/rich' component={Rich} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/city" component={City} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/order" component={Order} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/user" component={User} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path='/bikeMap' component={BikeMap} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/charts/bar" component={Bar} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/charts/pie" component={Pie} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/charts/line" component={Line} loginStatus={this.props.loginStatus} />
                  <PrivateRoute path="/permission" component={Permission} loginStatus={this.props.loginStatus} />
                  <Route component={Error404} />
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
  componentDidMount() {
    this.props.setStorageUser(this.props.userToken);
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'userToken'])
})

const mapDispatch = (dispatch) => ({
  setStorageUser(userToken) {
    dispatch(loginActionCreators.setLoginUser(userToken))
  }
})

export default connect(mapState, mapDispatch)(IRouter);