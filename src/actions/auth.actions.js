import request from "../helpers"
export const SET_USER_DATA = 'SET_USER_DATA'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_RELOAD_PENDING = 'USER_RELOAD_PENDING'
export const USER_RELOAD_SUCCESS = 'USER_RELOAD_SUCCESS'
export const USER_RELOAD_FAILED = 'USER_RELOAD_FAILED'


export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const DISPLAY_LYRICS_PENDING = 'DISPLAY_LYRICS_PENDING'
export const DISPLAY_LYRICS_SUCCESS = 'DISPLAY_LYRICS_SUCCESS'
export const DISPLAY_LYRICS_FAILED = 'DISPLAY_LYRICS_FAILED'

const BASE_URL = 'http://localhost:5000'

export const reloadUser = () => {
  return async (dispatch) =>  {
    dispatch({ type: USER_RELOAD_PENDING })
    return request('/auth/token')
  .then(response => {
    dispatch({ type: USER_RELOAD_SUCCESS})
    return request(`/users/${response.data.id}`)
  }).then(response => {

    dispatch(setUserData(response.data.data))
  }).catch(error => {

    dispatch({type: USER_RELOAD_FAILED })
  })
  }
}


export const userLogin = (userName, password) => {

  return async (dispatch) => {

    dispatch({ type: USER_LOGIN_PENDING })

    request('/auth/token', 'post', {userName, password})
    .then(response => {

      dispatch({type: USER_LOGIN_SUCCESS})
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      return request(`/users/${response.data.id}`)
    }).then(response => {

      dispatch(setUserData(response.data.data))
    }).catch(error => {

      dispatch({type: USER_LOGIN_FAILED })
    })
  }
}


export const displayLyrics = (props) => {

  return async (dispatch) => {

    dispatch({type: DISPLAY_LYRICS_PENDING})
    request(`/users/${props.id}`, "get")

      .then(response => {dispatch({ type: DISPLAY_LYRICS_SUCCESS, payload: response.data})
    })
      .catch(err => {
        dispatch({type: DISPLAY_LYRICS_FAILED , payload: err})
    })
  }
}


export const setUserData = (data) => {

  return (dispatch) => {
      dispatch({
        type: SET_USER_DATA,
        payload: data
      })

      console.log("actions", data)
  }
}

export const userSignup = (newUser) => {
  return async (dispatch) => {

      dispatch({type: USER_SIGNUP_PENDING})
      request(`/users`, "post")
      .then(response => {
        console.log("UserSign Up", response.data)

        dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data })
    }) .catch(err => {
        dispatch({type: USER_SIGNUP_FAILED, payload: err })
    })
  }
}


export const userLogout = () => {
  return async (dispatch) => { dispatch({type: USER_LOGOUT}) }
}
