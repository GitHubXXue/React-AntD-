import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

export default class Line extends React.Component {
  state = {}

  componentWillMount() {
    echarts.registerTheme('Imooc', echartTheme);
  }

  // dome1:单个用户骑行订单走势图
  getOption() {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis' //  默认tooltip的方式
      },
      xAxis: { // x 轴数据 折线图里面也是需要有一个data  去定义x 轴  横向坐标有哪些数据
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'  // 图表里面 百度echarts 里面内置了有几个值 ，他会根据这几个值，渲染不同的数据
      },
      series: [ // 数据列表
        {
          name: '订单量',
          type: 'line', // 定义折线图line
          data: [ // 饼图需要每一个data里面有一个name 和value 的，分别表实他的name 值  和value 值
            1000, // 这就不需要有这么多的东西了，他只是一个趋势点，我们只需要把每一个趋势的点画出来就可以了，每一个点会有一个值，
            2000, // 他不需要有name name  就是x 轴 横轴 对应的值，所以这里面 只需要填 我们的数据  ，这个点必须要和x 轴 的周一到周日 一一对应。
            1500,
            3000,
            2000,
            1200,
            800
          ]
        }
      ]
    }
    return option;
  }

  // 折线图两个趋势比较  dome2:ofo 和 摩拜  订单对比走势图 ，哪一个品牌走势更强烈些
  getOption2() {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: { // 大于一个的时候 通常都会给他加一个legend 去做一个展示(可以进行筛选，你到底需要展示哪一个，这是这么一个作用 当然 他也不是必须的)，控制显示哪一个 和不显示哪一个  
        data: ['OFO订单量', '摩拜订单量'] // 一个的时候我们已经知道他的ofo  就没有必要去加legend 
      },
      xAxis: {
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO订单量',
          type: 'line',
          stack: '总量',
          data: [ // 这些数据理论上都是服务端查询之后，把这个真实的数据返回给我们，前端主要是和服务端做一个对接，他只要把数据丢给我们，我们去做一个展示就还了
            1200,
            3000,
            4500,
            6000,
            8000,
            12000,
            20000
          ]
        },
        {
          name: '摩拜订单量',
          type: 'line',
          stack: '总量',
          data: [
            1000,
            2000,
            5500,
            6000,
            8000,
            10000,
            12000
          ]
        },
      ]
    }
    return option;
  }

  // dome3:区域型的，整个大区域作为一个颜色的标记，通过面积去看他是一个什么样子的范围
  // 控制一些属性 使他能够填充折线图区域内的一些颜色
  getOption3() {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: { // 直角坐标系grid中的x轴 // 默认 type 就是category
        type: 'category', //可以要也可以不要  因为默认就是category 
        // type的可选值 value category  time log
        //  value:数值轴，适用于连续数据
        //  category:类目轴，适用于离散的类目数据，为该类型时 必须通过data设置类目数据
        boundaryGap: false, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样 。默认是true 留白的（x轴数据是从中间开始的 不是从起点开始的）
        // 控制刻度是从起点0 开始呢，还是从中间开始。false x轴的刻度从0 开始，我们这个区域 就可以完全进行填充了
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'line',
          data: [
            1000,
            2000,
            1500,
            3000,
            2000,
            1200,
            800
          ],
          areaStyle: {} // 添加的属性  指定区域的样式  使他填充。（区域填充颜色 样式）
        }
      ]
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card title="折线图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }} />
        </Card>
        <Card title="折线图表之二" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }} />
        </Card>
        <Card title="折线图表之三" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption3()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{
              height: 500
            }} />
        </Card>
      </div>
    );
  }
}