import Taro, { Component } from '@tarojs/taro'
// import { View, Checkbox, Label, CheckboxGroup, Text } from '@tarojs/components'
import { View, Text, Block, Label, Input, Icon } from '@tarojs/components'

import './index.scss'

export default class SearchBar extends Component {
  static defaultProps = {
    todo: {}
  }

  state = {
    editing: false
  }

  // handleSubmit = () => {
  //   const val = this.state.editText.trim()
  //   if (val) {
  //     this.props.onSave(val)
  //     this.setState({ editText: val })
  //   } else {
  //     this.props.onDestroy()
  //   }
  // }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  // handleSave = (id, Text) => {
  //   if (Text.length === 0) {
  //     this.props.onDeleteTodo(id)
  //   } else {
  //     this.props.onEditTodo(id, Text)
  //   }
  //   this.setState({ editing: false })
  // }

  // handleCompleteTodo = (todo) => {
  //   console.log('handleCompleteTodo')
  //   this.props.onCompleteTodo(todo.id)
  // }

  render() {
    return (
      <Block>
        <View className="search-contain">
          <Text className="search-icon"></Text>
          <View className="search-txt">
            <Input type="text" placeholder="搜索" />
            <Text className="cross-icon" ></Text>
          </View>
        </View>
      </Block >
    )
  }
}