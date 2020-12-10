import { CHANNEL_SUCCESS, CHANNEL_FAIL } from '../types/types'

const initialState = {}
export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CHANNEL_SUCCESS:
      return { ...state, ...payload }

    default:
      return state
  }
}
