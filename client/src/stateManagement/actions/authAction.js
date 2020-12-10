import Apicall from '../../network/ApiCall'
import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  REGISTER_FAIL,
} from '../types/types'
const api = new Apicall()
// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.getUser()
    if (res.status === 200) {
      dispatch({
        type: USER_LOADED,
        payload: res.data.data,
      })
    } else {
      dispatch({
        type: AUTH_ERROR,
      })
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

// Register User
export const register = (email, password) => async dispatch => {
  try {
    const res = await api.register({ email, password })
    localStorage.setItem('token', res.data.data.token)
    console.log(res)
    if (res.status === 201) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data,
      })

      dispatch(loadUser())
    } else {
      dispatch({
        type: REGISTER_FAIL,
      })
    }
  } catch (errors) {
    console.log(errors.response)

    dispatch({
      type: REGISTER_FAIL,
    })
  }
}

// Login User
export const login = (email, password) => async dispatch => {
  try {
    const res = await api.signin({ email, password })
    localStorage.setItem('token', res.data.data.token)
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      })

      dispatch(loadUser())
    } else {
      dispatch({
        type: LOGIN_FAIL,
      })
    }
  } catch (errors) {
    console.log(errors.response)

    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout
export const logout = () => ({ type: LOGOUT })
