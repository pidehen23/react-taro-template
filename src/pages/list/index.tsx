import React, { memo } from 'react'
import { View, RichText } from '@tarojs/components'

import styles from './style/index.less'

class UserList extends React.Component {

  componentDidMount() {
    console.log('小程序运行环境是：', process.env.TARO_ENV)
  }

  render() {
    const list = Array(100).fill(0).map((_item, index) => {
      return ({ index })
    })

    return (
      <View className={styles.list}>
        {list.map(item => <RichText key={item.index} nodes={
          `<div class="div_class">
        <h1>${item.index}-Title</h1>
        <p class="p">
         Life is&nbsp;
         <i>like</i>&nbsp;a box of<b>&nbsp;chocolates</b>.
        </p>
      </div>`}
        />)}
      </View>)
  }
}

export default memo(UserList)