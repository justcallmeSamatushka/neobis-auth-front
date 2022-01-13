import { HOMEPAGE_HASTOKEN } from '../../const';


const initialState = {
  hasToken: false,
  users: null,
  me: null,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_HASTOKEN:
      return {
        ...state,
        hasToken: !!localStorage.getItem('token'),
      }
    default:
      return state;
  }
}