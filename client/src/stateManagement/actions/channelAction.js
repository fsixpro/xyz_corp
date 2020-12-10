import Apicall from '../../network/ApiCall'
import { CHANNEL_SUCCESS, CHANNEL_FAIL } from '../types/types'
const api = new Apicall()

export const getChannel = () => async dispatch => {
  const res = await api.getChannel()
  if (res.status == 200) {
    dispatch({
      type: CHANNEL_SUCCESS,
      payload: res.data.data,
    })
  }
}

export const editChannel = param => async dispatch => {
  const res = await api.editChannel(param)
  if (res.status == 200) {
    dispatch({
      type: CHANNEL_SUCCESS,
      payload: res.data.data,
    })
  }
}
