import Taro, { Component } from '@tarojs/taro'
// import { View, Checkbox, Label, CheckboxGroup, Text } from '@tarojs/components'
import { View, Text, Icon } from '@tarojs/components'


import './index.scss'

export default class ViewList extends Component {
  static defaultProps = {
    articleList: [
      { title: '2019年前端最新技术速览' },
      { title: 'react源码解读（一）' },
      { title: '微信小程序登录流程解读' },
      { title: '微信小程序二维码生成流程' },
      { title: 'JavaScript设计模式梳理' },
      { title: '编写typescript遇到的问题总结' },
      { title: '使用nodejs构建网站' },
      { title: 'webpack运行基础方式' },
      { title: '使用electron构建应用' },
    ]
  }

  state = {
    articleList: [
      { tag: 'normal', id: '0', title: '2019年前端最新技术速览' },
      { tag: 'react', id: '1', title: 'react源码解读（一）' },
      { tag: 'we-mp', id: '2', title: '微信小程序登录流程解读' },
      { tag: 'we-mp', id: '3', title: '微信小程序二维码生成流程' },
      { tag: 'javascript', id: '4', title: 'JavaScript设计模式梳理' },
      { tag: 'typescript', id: '5', title: '编写typescript遇到的问题总结' },
      { tag: 'nodejs', id: '6', title: '使用nodejs构建网站' },
      { tag: 'webpack', id: '7', title: 'webpack运行基础方式' },
      { tag: 'electron', id: '8', title: '使用electron构建应用' },
    ]
  }

  handleClick = (index) => (e) => {
    e.stopPropagation()
    Taro.navigateTo({
      url: `/pages/detail/index?id=${index}`
    });
  }

  render() {
    return (
      <View className="article-list">
        {
          this.state.articleList.map((item) => {
            return <View className="article-item" key={item.id} onClick={this.handleClick(item.id)}>
              <Text className={`icon icon-${item.tag}`}>{item.tag}</Text>
              <Text>{item.title}</Text>
            </View>
          })
        }
      </View>
    )
  }
}