export default {
  pages: [
    'pages/home/index',
    'pages/user/index'
  ],
  tabBar: {
    list: [{
      pagePath: 'pages/home/index',
      text: '首页'
    }, {
      pagePath: 'pages/user/index',
      text: '个人信息'
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
