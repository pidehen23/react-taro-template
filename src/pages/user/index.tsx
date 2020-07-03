import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import classnames from 'classnames'

import styles from './style/index.less'
import { IWrapHomeState } from '@/store/home/type'

type PageStateProps = {

}

type PageDispatchProps = {
}

type PageOwnProps = {}

type PageState = {
  msg: string
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

type IState = PageState

class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      msg: '我是爷爷'
    }
  }

  componentDidUpdate() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onReady() {
    console.log('onReady')
  }

  onNextPage = () => {
    Taro.navigateTo({ url: '/pages/home/index' })
  }

  render() {
    return (
      <View className={classnames(styles.index, { [styles.user]: true })}>
        <Button onClick={this.onNextPage}>个人信息</Button>
        <Text>{this.state.msg}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: IWrapHomeState) => ({
  count: state.home.count
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

