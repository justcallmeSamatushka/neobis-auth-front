// Вот наш загадочный const fail
// тут все наши названия и эндпоинты
// в случае чего их можно разделить на 3 файла(URL, ACTIONS, COMMANDS)

// URLs
export const BASE_URL = 'https://sheltered-dusk-77313.herokuapp.com'

export const AUTH_SIGNIN_POST = '/auth/signin'
export const AUTH_SIGNUP_POST = '/auth/signup'

export const USERS_ME_GET = '/users/me'
export const USERS_ALL_GET = '/users'

// ACTIONS
export const SIGNUP_FORM_STARTED = 'SIGNUP_FORM_STARTED'
export const SIGNUP_FORM_SUCCESS = 'SIGNUP_FORM_SUCCESS'
export const SIGNUP_FORM_FAILURE = 'SIGNUP_FORM_FAILURE'

export const SIGNIN_FORM_STARTED = 'SIGNIN_FORM_STARTED'
export const SIGNIN_FORM_SUCCESS = 'SIGNIN_FORM_SUCCESS'
export const SIGNIN_FORM_FAILURE = 'SIGNIN_FORM_FAILURE'

export const HOMEPAGE_HASTOKEN = 'HOMEPAGE_HASTOKEN'

// COMMANDS
export const SIGNIN_CMD_POST = 'SIGNIN_CMD_POST'
export const SIGNUP_CMD_POST = 'SIGNUP_CMD_POST'

export const USERS_ALL_CMD_GET = 'USERS_ALL_CMD_GET'
export const USERS_ME_CMD_GET = 'USERS_ME_CMD_GET'