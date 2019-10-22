import Taro, { Component, Config } from '@tarojs/taro'
// Text
import { View, Button, Text } from '@tarojs/components'
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
    navigationBarTitleText: '详情'
  }

  componentWillMount() { }

  componentDidMount() {
    console.log(this.$router.params.id, '--');
    this.setState({
      activeId: this.$router.params.id
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  state = {
    activeId: null,
    articleTextList: [
      { tag: 'normal', id: '0', title: '2019年前端最新技术速览', content: '随着移动互联网的发展，前端开发得到了快速的发展，前端开发在内容上、形式上、功能上都有了极大的丰富，对前端开发人员的要求也在逐渐提高。 \n 应用开发 | 包括移动端应用和桌面应用。比如你可以使用React构建原生应用，用Angular, Typescript, JavaScript进行混合开发构建WeApp应用。| 使用Electron构建跨平台的桌面应用。Electron使用到了 Chromium内核和Node.js，兼容Windows, Mac& Linux等平台，Electron。 | TypeScript | TypeScript是JavaScript的扩展，增加了面向对象和静态类型等多种特性，相比JS更规范，方便测试。广泛用于Angular、React和Vue项目中。| 无服务架构 | 无服务器架构是云计算的热点趋势，不必要创建和管理服务器，专注于前端和业务，这是云服务带来的方便。| PWA | PWA（Progressive Web Apps）可以理解为是一个增强型的web app。本质还是web App，但是经过增强，在功能和样式上给用户带来类似原生应用使用体验的一项技术。其开发的应用是响应式的，有类似App的交互，能够离线存储提供服务，采用Https,安全可靠。' },
      { tag: 'react', id: '1', title: 'react源码解读（一）', content: 'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。以声明式编写 UI，可以让你的代码更加可靠，且方便调试。\n 创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。 \n 无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。' },
      { tag: 'we-mp', id: '2', title: '微信小程序登录流程解读', content: '小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过 UnionID 来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号（包括小程序），用户的 UnionID 是唯一的。换句话说，同一用户，对同一个微信开放平台下的不同应用，unionid是相同的。' },
      { tag: 'we-mp', id: '3', title: '微信小程序二维码生成流程', content: '登录微信小程序后台，打开【设置】，获取：相应的APP ID 和 Secret。微信以及芝麻提供了两个 POST 获取小程序二维码的接口。你可以根据你的业务需求，自由选择任一接口，获取相应的小程序二维码 1.普通二维码接口获取最常见的二维码样式，黑白相间模块的二维码。 2.最新菊花码板式小程序参数码，接口获取。通过此接口，可以获取到：微信小程序“菊花码”，比较美观，也可以自定义logo；' },
      { tag: 'javascript', id: '4', title: 'JavaScript设计模式梳理', content: '  设计原则  单一职责原则（SRP）  一个对象或方法只做一件事情。如果一个方法承担了过多的职责，那么在需求的变迁过程中，需要改写这个方法的可能性就越大。  应该把对象或方法划分成较小的粒度  最少知识原则（LKP）  一个软件实体应当 尽可能少地与其他实体发生相互作用   应当尽量减少对象之间的交互。如果两个对象之间不必彼此直接通信，那么这两个对象就不要发生直接的 相互联系，可以转交给第三方进行处理  开放-封闭原则（OCP）  软件实体（类、模块、函数）等应该是可以 扩展的，但是不可修改  当需要改变一个程序的功能或者给这个程序增加新功能的时候，可以使用增加代码的方式，尽量避免改动程序的源代码，防止影响原系统的稳定' },
      { tag: 'typescript', id: '5', title: '编写typescript遇到的问题总结', content: 'TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。安德斯·海尔斯伯格，C#的首席架构师，已工作于TypeScript的开发。2012年十月份，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript 0.9，向未来的TypeScript 1.0版迈进了很大一步。' },
      { tag: 'nodejs', id: '6', title: '使用nodejs构建网站', content: 'node.js是构建在Chrome v8 引擎上的一个javascript 运行环境 node和Chrome一样都是基于事件驱动的异步架构！Chrome是基于事件的交互，而node是基于事件的I/O； node没有HTML、Webkit和显卡驱动等UI技术支持；' },
      { tag: 'webpack', id: '7', title: 'webpack运行基础方式', content: '本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。     ' },
      { tag: 'electron', id: '8', title: '使用electron构建应用', content: 'Electron是由Github开发，用HTML，CSS和JavaScript来构建跨平台桌面应用程序的一个开源库。 Electron通过将Chromium和Node.js合并到同一个运行时环境中，并将其打包为Mac，Windows和Linux系统下的应用来实现这一目的。 Electron于2013年作为构建Github上可编程的文本编辑器Atom的框架而被开发出来。这两个项目在2014春季开源。目前它已成为开源开发者、初创企业和老牌公司常用的开发工具。 看看谁在使用Electron 。继续往下阅读可以了解Electron的贡献者们和已经发布的版本，或者直接阅读快速开始指引来开始用Electron来构建应用。' },
    ]
  }

  render() {
    let {activeId, articleTextList} = this.state;
    return (
      <View className='detail'>
        {
          activeId && 
            <View className="article-detail-item">
              <View className="article-detail-title">{articleTextList[activeId].title}</View>
              <View className="article-detail-content">{articleTextList[activeId].content}</View>
            </View>
        }
      </View>
    )
  }
}
