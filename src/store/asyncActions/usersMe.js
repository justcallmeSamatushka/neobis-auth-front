import { USERS_ME_CMD_GET } from '../../const'
import { usersMe } from '../actionCreators'
import { API_REQUEST } from '../configs'


export const userMe = () => {
  return async dispacth => {
    const {data} = await API_REQUEST(USERS_ME_CMD_GET)
    dispacth(usersMe(data))
  }
}