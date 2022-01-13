import { SIGNUP_FORM_FAILURE, SIGNUP_FORM_STARTED, SIGNUP_FORM_SUCCESS } from '../../const';

const initialState = {
  loading: false,
  errors: null,
}

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FORM_STARTED:
      return {
        ...state,
        loading: true,
      }
    case SIGNUP_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
      }
    case SIGNUP_FORM_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
    default:
      return state;
  }
}