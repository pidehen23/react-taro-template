/*
 * @Description:
 * @Author: Chenjiajing
 * @Date: 2020-07-02 10:39:10
 * @LastEditors: Chenjiajing
 * @LastEditTime: 2020-08-28 16:44:03
 */
export default {
  pages: [
    // tabbar
    "pages/home/index",
    "pages/user/index",

    // page
    "pages/list/index"
  ],
  tabBar: {
    custom: true,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/home/index",
        iconPath: "image/icon_component.png",
        selectedIconPath: "image/icon_component_HL.png",
        text: "首页"
      },
      {
        pagePath: "pages/user/index",
        iconPath: "image/icon_API.png",
        selectedIconPath: "image/icon_API_HL.png",
        text: "个人信息"
      }
    ]
  },
  usingComponents: {},
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  }
};
