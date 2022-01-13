import { SIGNUP_CMD_POST, } from '../../const'
import { signupFormFail, signupFormStart, signupFormSucc } from '../actionCreators'
import { API_REQUEST } from '../configs'

export const signupAsync = (form) => {
  return async dispatch => {
    dispatch(signupFormStart())

    try {
      // SIGNUP_CMD_POST обычная строка из const.js но точна похожее название как и commands
      // эта функция у нас принимает 3 аргумента cmd, obj, multihuyna
      await API_REQUEST(SIGNUP_CMD_POST, { data: form })
      dispatch(signupFormSucc())
    } catch ({response}) {
      dispatch(signupFormFail(response.data))
    }
  }
}