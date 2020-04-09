import React, { PureComponent } from 'react';
import { Card, Button, message } from 'antd';
import {
  Div
} from './ui';

class Buttons extends PureComponent {
  render() {
    return (
      <Div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>Info</Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>Error</Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>Loading</Button>
        </Card>
      </Div>
    );
  }
  showMessage = (type) => {
    message[type]("恭喜你，React课程晋级成功");
  }
}

export default Buttons;