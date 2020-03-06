import React from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react';
import echartTheme from '../echartTheme'
import themeLight from '../themeLight'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
export default class Bar extends React.Component {

  state = {}

  componentWillMount() {
    echarts.registerTheme('Imooc', themeLight);
  }

  getOption() {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center' // 标题 水平方向居中
      },
      // 副标题
      legend: {
        orient: 'vertical', // 垂直方向居中 通过他可以把副标题 定义到右侧垂直方向排布  
        right: 10, //本身是一个绝对定位  通过这种方式 控制 legend  值的展示
        top: 20,
        bottom: 20,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] // 我们可以把每周展示出来
      },
      tooltip: {
        trigger: 'item',
        // 自定义添加比例 formatter 格式化 ：我们怎么去自定义格式化这么一个东西
        formatter: "{a} <br/>{b} : {c} ({d}%)" // 添加比例 订单量 周三 2000 （17.09%） 主要就是应用到我们的饼图里面去
        // {a}：系列名series 里面的 name
        // {b}: 数据名 series 下的 data 下的 name
        // {c}: 数据值 series 下的 data 下的 value 
        // {d}: 比例
      },
      // 图标的核心 没有series  图表是没有办法加载的
      series: [
        // 饼图和柱形图的标识不一样  饼图 没有x轴 和 y 轴，柱形图开发的时候 x 轴定义周一到周日
        {
          name: '订单量',
          type: 'pie', // 用它来指定我们的图表是柱形图还是饼图 pie饼图
          radius: '55%',
          center: [
            '50%', '60%'
          ],
          // 依次列举数据源
          data: [ // 柱形图 只需要在data里面丢每个值就可以了
            // 饼图就不一样 饼图是显示我们数据的比例 比例的化 每一项都会有一个名字  和 值
            {
              value: 1000, // 饼图里面没有x 轴 ，通过name 去表达，value 每一块的 比例是多少，这样才能够进行计算
              name: '周一' // 否则不知道这一部分显示的是周一 
            },
            {
              value: 1000,
              name: '周二'
            },
            {
              value: 2000,
              name: '周三'
            },
            {
              value: 1500,
              name: '周四'
            },
            {
              value: 3000,
              name: '周五'
            },
            {
              value: 2000,
              name: '周六'
            },
            {
              value: 1200,
              name: '周日'
            },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    return option;
  }

  // 环形图 在于怎么把中间的心 变成一个环形
  getOption2() {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
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
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: ['50%', '80%'], // 控制内环 和 外环的大小的 ，想控制内环外环大小 直接通过值 比例 进行控制，让他放大还是放小 
          center: [ // 控制图表的位置 居在左侧还是右侧 还是中间
            '50%', '60%'
          ],
          data: [
            {
              value: 1000,
              name: '周一'
            }, {
              value: 1000,
              name: '周二'
            }, {
              value: 2000,
              name: '周三'
            }, {
              value: 1500,
              name: '周四'
            }, {
              value: 3000,
              name: '周五'
            }, {
              value: 2000,
              name: '周六'
            }, {
              value: 1200,
              name: '周日'
            }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    return option;
  }

  getOption3() {
    let option = {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
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
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: '55%',
          center: [
            '50%', '50%'
          ],
          data: [
            {
              value: 1000,
              name: '周一'
            }, {
              value: 1000,
              name: '周二'
            }, {
              value: 2000,
              name: '周三'
            }, {
              value: 1500,
              name: '周四'
            }, {
              value: 3000,
              name: '周五'
            }, {
              value: 2000,
              name: '周六'
            }, {
              value: 1200,
              name: '周日'
            }
          ].sort(function (a, b) { return a.value - b.value; }), // js 里面 本身就具有的这么一个排序的功能
          // 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式
          // 1.'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小（你的数据量越小 你的半径就越短，数据量越大 你的半径就越长）
          // 2.'area' 所有扇区圆心角相同，仅通过半径展现数据大小
          roseType: 'radius', // 控制图形显示的样子 
          animationType: 'scale', // 控制鼠标移动上去有一个什么样的动画效果（但是不加最后三个属性 也是会有一个默认的动画效果）
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card title="饼形图表之一">
          <ReactEcharts
            option={this.getOption()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }} />
        </Card>
        <Card title="饼形图之二" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption2()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }} />
        </Card>
        <Card title="饼形图之三" style={{ marginTop: 10 }}>
          <ReactEcharts
            option={this.getOption3()}
            theme="Imooc"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 500 }} />
        </Card>
      </div>
    );
  }
}