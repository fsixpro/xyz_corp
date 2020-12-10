import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  USER_LOADED,
  REGISTER_FAIL,
} from '../types/types'

const initialState = {
  token: localStorage.getItem('token'),
  user: {},
  isAuthenticated: false,
  error: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      }

    case LOGOUT:
      localStorage.clear()
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {
          email: null,
        },
      }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.clear()
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload,
      }
    default:
      return state
  }
}
