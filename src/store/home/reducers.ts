import { handleActions } from 'redux-actions'
import * as types from './actionTypes'
import initialState from './store'

export default handleActions(
  {
    [`${types.setCommon}`]: (state: any, action: { payload: any }) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
)
