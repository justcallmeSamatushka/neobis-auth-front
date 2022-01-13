import { 
  SIGNIN_FORM_STARTED,
  SIGNIN_FORM_SUCCESS,
} from '../../const';


const inintialState = {
  email: '',
  password: '',
  loading: false,
}

export const loginReducer = (state = inintialState, action) => {
  switch (action.type) {
    case SIGNIN_FORM_STARTED:
      return {
        ...state,
        loading: true,
      }
    case SIGNIN_FORM_SUCCESS:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}