/*
 * @Description:
 * @Author: Chenjiajing
 * @Date: 2020-07-02 16:22:31
 * @LastEditors: Chenjiajing
 * @LastEditTime: 2020-08-29 13:31:55
 */
// 所有数据
export interface IHomeState {
  count: number;
  currentIndx: number;
}

export interface IWrapHomeState {
  home: IHomeState;
}
