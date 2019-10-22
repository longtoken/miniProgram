import Taro, { Component, Config } from '@tarojs/taro'
// Text
import { View, Button } from '@tarojs/components'
import './index.scss'

// import Login from '../../components/login/index'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  state = {
    name: '未设置',
    phone: '未设置',
    sex: '未设置',
    habit: '未设置',
  }

  render() {
    let {name, phone, sex, habit} = this.state;
    return (
      <View className='index'>
        <View className="center-wrap-cells">
          <View className="center-cell">
            <View className="cell-label">昵称</View>
            <View className="cell-content">{name}</View>
          </View>
          <View className="center-cell">
            <View className="cell-label">手机号</View>
            <View className="cell-content">{phone}</View>
          </View>
          <View className="center-cell">
            <View className="cell-label">性别</View>
            <View className="cell-content">{sex}</View>
          </View>
          <View className="center-cell">
            <View className="cell-label">兴趣</View>
            <View className="cell-content">{habit}</View>
          </View>
        </View>
      </View>
    )
  }
}
