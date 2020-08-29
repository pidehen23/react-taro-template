import React, { PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { CoverView, CoverImage } from '@tarojs/components';

import styles from './index.less';
import { IWrapHomeState, IHomeState } from '@/store/home/type';
import { setCommon } from '@/store/home/actions';

const TabBarList = [{
  pagePath: "/pages/home/index",
  iconPath: '/image/icon_component.png',
  selectedIconPath: '/image/icon_component_HL.png',
  text: "首页"
}, {
  pagePath: "/pages/user/index",
  iconPath: '/image/icon_API.png',
  selectedIconPath: '/image/icon_API_HL.png',
  text: "个人信息"
}]

interface IProps {
  currentIndx: number
  setCommon: (payload: Partial<IHomeState>) => Promise<void>
}

const CustomTabBar = (props: PropsWithChildren<IProps>) => {
  const { currentIndx } = props

  const switchTab = (item: any, index: number) => {
    Taro.switchTab({ url: item.pagePath })
    props.setCommon({
      currentIndx: index
    })
  }

  return (
    <CoverView className={styles['tab-bar']}>
      <CoverView className='tab-bar-border'></CoverView>
      {TabBarList.map((item, index) => {
        return (
          <CoverView
            key={item.pagePath}
            className='tab-bar-item'
            onClick={() => { switchTab(item, index) }}
          >
            <CoverImage
              className='image'
              src={currentIndx === index ? item.selectedIconPath : item.iconPath}
            />
            <CoverView
              className='text'
              style={{ color: currentIndx === index ? '#3cc51f' : '#7A7E83' }}
            >
              {item.text}
            </CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

const mapStateToProps = (state: IWrapHomeState) => ({
  currentIndx: state.home.currentIndx
})
const mapDispatchToProps = (dispatch: any) => ({
  setCommon: (payload: Partial<IHomeState>) => dispatch(setCommon(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabBar)
