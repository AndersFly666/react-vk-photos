import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/User'

const initialState = {
  user: null,
  token: null,
  isFetching: false,
  error: '',
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, error: '', isFetching: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isFetching: false,
      }
    case LOGIN_FAILED:
      return { ...state, error: action.payload.message, isFetching: false }
    default:
      return state
  }
}
