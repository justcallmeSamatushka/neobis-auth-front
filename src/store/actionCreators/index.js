import { 
  HOMEPAGE_HASTOKEN,
  SIGNUP_FORM_FAILURE,
  SIGNUP_FORM_STARTED,
  SIGNUP_FORM_SUCCESS,
  SIGNIN_FORM_STARTED,
  SIGNIN_FORM_SUCCESS,
  SIGNIN_FORM_FAILURE
} from '../../const';


export const signupFormStart = () => ({type: SIGNUP_FORM_STARTED})
export const signupFormSucc = () => ({type: SIGNUP_FORM_SUCCESS})
export const signupFormFail = (payload) => ({type: SIGNUP_FORM_FAILURE, payload})

export const homePageHasToken = (payload) => ({type: HOMEPAGE_HASTOKEN, payload})

export const signinFormStart = () => ({type: SIGNIN_FORM_STARTED})
export const signinFormSucc = (payload) => ({type: SIGNIN_FORM_SUCCESS, payload})
export const signinFormFail = (payload) => ({type: SIGNIN_FORM_FAILURE, payload})