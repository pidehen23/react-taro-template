import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import classnames from 'classnames'

import apis from './apis'
import styles from './style/index.less'
import { IWrapHomeState } from '@/store/home/type'
import { setCommon, add, minus, asyncAdd } from '@/store/home/actions'

type PageStateProps = {
  count: number
}

type PageDispatchProps = {
  add: () => void
  minus: () => void
  asyncAdd: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps & PageState

interface IState {
  loading: boolean
}


class Index extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    console.log('ENV=', Taro.getEnv())
    try {
      const res = await Taro.request({
        method: 'GET',
        url: apis.getUserInfo()
      })
      console.log(res)
      this.setState({
        loading: false
      })
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }
  }

  componentDidUpdate(prexProps: any) {
    console.log(this.props, prexProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  asyncAdd = () => {
    this.props.asyncAdd && this.props.asyncAdd()
  }

  render() {
    const { count } = this.props

    return (
      <View className={classnames(styles.index, { [styles.home]: true })}>
        <Button className='btn add_btn' onClick={this.props.add}>+</Button>
        <Button className='btn dec_btn' onClick={this.props.minus}>-</Button>
        <Button className='btn dec_btn' onClick={this.asyncAdd}>async</Button>
        <View><Text>{count}</Text></View>
        <Text>{this.state.loading ? '加载中' : '加载完成'}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state: IWrapHomeState) => ({
  count: state.home.count
})

const mapDispatchToProps = (dispatch: any) => ({
  setCommon: (payload: any) => dispatch(setCommon(payload)),
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  asyncAdd: () => dispatch(asyncAdd())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)

