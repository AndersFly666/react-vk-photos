import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/User'

const VK = window.VK

export function handleLogin() {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    VK.Auth.login(r => {
      if (r.session) {
        const { user, sid } = r.session

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user,
            token: sid,
          },
        })
      } else {
        dispatch({
          type: LOGIN_FAILED,
          error: true,
          payload: new Error('Authorisation error'),
        })
      }
    }, 4)
  }
}
