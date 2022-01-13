import axios from 'axios'
import { AUTH_SIGNUP_POST, BASE_URL } from '../../const'
import { signupFormFail, signupFormStart, signupFormSucc } from '../actionCreators'

export const signupAsync = (form) => {
  return async dispatch => {
    dispatch(signupFormStart())

    try {
      await axios.post(`${BASE_URL}${AUTH_SIGNUP_POST}`, form);
      dispatch(signupFormSucc())
    } catch ({response}) {
      dispatch(signupFormFail(response.data))
    }
  }
}