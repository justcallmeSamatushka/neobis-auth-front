import { API_REQUEST } from '../../../configs'
import { getAllUsersAction } from '../actionCreator'
import { USERS_ALL_CMD_GET } from '../../../../const'


export const asyncAllUsers = () => {
  return async dispacth => {

    try {
      const { data } = await API_REQUEST(USERS_ALL_CMD_GET)

      const users = data.users.map(user => ({...user, key: Date.now()}))
      
      dispacth(getAllUsersAction(users))
    } catch (error) {
      console.log('error: ', error);
    }

  }
}