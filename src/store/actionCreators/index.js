import { SIGNUP_FORM_FAILURE, SIGNUP_FORM_STARTED, SIGNUP_FORM_SUCCESS } from '../../const';


export const signupFormStart = () => ({type: SIGNUP_FORM_STARTED})
export const signupFormSucc = () => ({type: SIGNUP_FORM_SUCCESS})
export const signupFormFail = (payload) => ({type: SIGNUP_FORM_FAILURE, payload})