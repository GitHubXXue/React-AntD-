import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}   
        {
          // 这样里面就可以  加载一切组件 ，什么都不定义
          // 我们可以接纳任何一个组件，比如说登陆页面、详情页面、主页
          // 因为里面没有任何的格式定义
        }
      </div>
    );
  };
}

export default App;
