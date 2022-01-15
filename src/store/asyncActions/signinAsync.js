import { SIGNIN_CMD_POST } from '../../const'
import { signinFormStart } from '../actionCreators'
import { API_REQUEST } from '../configs'


export const signinAsync = (form) => {
  return async dispatch => {
    dispatch(signinFormStart())
    // console.log(res);
    try {
      const {data} = await API_REQUEST(SIGNIN_CMD_POST, { data: form })
      
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.log("error", error)
    }
  }
}