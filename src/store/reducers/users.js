import { USERS_ME } from '../../const'


const initialState = {
  aboutMe: null,
}

export const usersMe = (state = initialState, action) => {
  switch (action.type) {
    case USERS_ME:
      return {
        ...state,
        aboutMe: action.payload
      }  
    default:
      return state;
  }
}