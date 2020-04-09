import React, { PureComponent } from 'react';
import { Card, Tabs, message, Icon } from 'antd'
import {
  Div
} from './ui'
const TabPane = Tabs.TabPane;

class Buttons extends PureComponent {
  componentWillMount() {
    // 新增和关闭页签
    const panes = [
      {
        title: 'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }
  render() {
    return (
      <Div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程</TabPane>
            <TabPane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习React课程</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab新增和关闭页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel) => {
                return <TabPane
                  tab={panel.title}
                  key={panel.key}
                />
              })
            }
          </Tabs>
        </Card>
      </Div>
    );
  };
  newTabIndex = 0;
  // 切换页签
  handleCallback = (key) => {
    message.info("Hi,您选择了页签：" + key)
  }
  // 切换面板的回调
  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  // 新增和删除页签的回调，在 type="editable-card" 时有效
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => { // targetKey 当前需要删除哪个页签的key 值 
    let activeKey = this.state.activeKey; // activeKey 当前打开的是哪一个页签
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
}

export default Buttons;
