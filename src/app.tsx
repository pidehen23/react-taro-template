import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './app.less'
import configStore from './store'

const store = configStore()

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
