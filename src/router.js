import React, { PureComponent } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import NotFount from './pages/notfound';
import loadable from './utils/loadable';
import Common from './common'

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
const Rich = loadable(() => import('./pages/rich'));
const City = loadable(() => import('./pages/city'));
const Order = loadable(() => import('./pages/order'));
const OrderDetail = loadable(() => import('./pages/myorder/detail'));

class IRouter extends PureComponent {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common" render={() => // 这样我们就不需要考虑我们的二级导航  小导航了
              // render 的时候 匹配到一个/common 路由的时候 我们需要  renturn 或者把大括号去掉  否则是没有办法接收到数据的 一但加大括号是不会直接return  手动的return一下
              // 如果不写大括号  他会自动的帮助我们return  
              <Common>
                <Route path="/common/order/detail/:orderId" component={Login} />
              </Common>
            } />
            <Route path="/" render={() =>
              <Admin>
                <Redirect to="/home" />
                <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/ui/buttons' component={Buttons} />
                  <Route path='/ui/modals' component={Modals} />
                  <Route path='/ui/loadings' component={Loadings} />
                  <Route path='/ui/notifications' component={Notifications} />
                  <Route path='/ui/messages' component={Messages} />
                  <Route path='/ui/tabs' component={Tabs} />
                  <Route path='/ui/gallery' component={Gallery} />
                  <Route path='/ui/carousel' component={Carousel} />
                  <Route path='/form/login' component={FormLogin} />
                  <Route path="/form/reg" component={FormRegister} />
                  <Route path="/table/basic" component={BasicTable} />
                  <Route path="/table/high" component={HighTable} />
                  <Route path='/rich' component={Rich} />
                  <Route path="/city" component={City} />
                  <Route path="/order" component={Order} />
                  {
                    //<Route component={NotFount} />
                  }
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter;