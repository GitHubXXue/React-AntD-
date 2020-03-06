import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig';
import {
  NavLeftDiv 
} from './style';
import { actionCreators } from "../Header/store";

const { SubMenu } = Menu;

class NavLeft extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: '',
    }
  }

  render() {
    return (
      <NavLeftDiv>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark" onClick={this.props.handleClickMenuItem}>
          {this.state.menuTreeNode}
        </Menu>
      </NavLeftDiv>
    );
  };

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.title}>
        <NavLink to={item.key} replace>{item.title}</NavLink>  
      </Menu.Item>
    })
  }

}

const mapDispatch = (dispatch) => ({
  handleClickMenuItem(e){
    dispatch(actionCreators.setHeaderTitle(e.key))
  },
});

export default connect(null, mapDispatch)(NavLeft);
