import {
  // USER_LOGIN_PENDING,
  // USER_LOGIN_SUCCESS,
  // USER_LOGIN_FAILED,

  SET_USER_DATA,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT
} from '../actions/auth.actions'


let initialState = {
  isLoading: false,
  user: {},
  showLoginError: false,
  showSignupError: false,
  isLoggedIn: false,
  songs: []
};


export default(state = initialState, action) => {
  switch (action.type) {
    // case USER_LOGIN_PENDING:
    //   return {...state, isLoading: true}
    // case USER_LOGIN_SUCCESS:
    //   console.log(action.payload, "reducers")
    //   return {...state, isLoading: false, user: action.payload, isLoggedIn: true}
    // case USER_LOGIN_FAILED:
    //   return {...state, isLoading: false, showLoginError: true, isLoggedIn: false }
    case SET_USER_DATA:
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload
    }
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
      return {...state, isLoading: false}
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true}
    case USER_LOGOUT:
      return initialState
    default:
      return state;
  }
}
