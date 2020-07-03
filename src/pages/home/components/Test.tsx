import React from 'react'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Test extends React.Component {
  componentDidMount() {
    eventCenter.once(getCurrentInstance().router.onReady, () => {
      const query = Taro.createSelectorQuery()
      query.select('#only').boundingClientRect()
      query.exec(res => {
        console.log(res, 'res')
      })
      console.log('onReady')
    })
  }

  render() {
    return (
      <View id='only'>
        <Text>我是你爸爸</Text>
      </View>
    )
  }
}

export default Test