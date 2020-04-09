import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import { NavLeftDiv } from './style';
import { actionCreators } from "../Header/store";

class NavLeft extends PureComponent {
  constructor(props) {
    super(props);
    const { SubMenu } = Menu;
    //菜单渲染
    let renderMenu = (data) => {
      return data.map((item) => {
        if (item.children) {
          return (
            <SubMenu title={item.title} key={item.key}>
              {renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key} replace>{item.title}</NavLink>
        </Menu.Item>
      })
    }
    this.state = {
      // 根据当前页面路径获取对应菜单路由 ，解决页面刷新 ，菜单取消选中的尴尬事。
      // /#/city?a=  =>  /city
      currentKey: window.location.hash.replace(/#|\?.*/g, ''), // 动态去改selectedKeys的话， 这里声明一个状态currentKey 默认是空
      menuTreeNode: renderMenu(MenuConfig)
    }
  };

  // 菜单点击  // 点击MenuItem调用此函数
  handleClick = ({ item, key }) => { // 菜单的onClick 事件 ，他有一个回调方法 参数（item、key、keyPath）
    if (key === this.state.currentKey) {
      return false;
    }
    // 事件派发，title保存到store对象中
    this.props.switchMenu(item.props.title)
    this.setState({
      currentKey: key
    });
  };

  render() {
    return (
      <NavLeftDiv>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>React MS</h1>
        </div>
        <Menu
          defaultSelectedKeys={[this.state.currentKey]}
          // 代表当前你需要选中的是哪个菜单 ,/city 是key 值，
          // 也就是说每个菜单他的路由都是这个key 值，也就是说我们把key值 写在这 就可以保证他是一个选中状态.
          // 不填数组也是可以的  selectedKeys  是可以选中多个的
          onClick={this.handleClick} // 在点击的时候去更改这个 currentKey属性
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </NavLeftDiv>
    )
  };
}

const mapDispatch = (dispatch) => ({
  switchMenu: (title) => dispatch(actionCreators.setHeaderTitle(title)),
});

export default connect(null, mapDispatch)(NavLeft)
