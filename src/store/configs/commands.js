import { AUTH_SIGNUP_POST, AUTH_SIGNIN_POST, USERS_ALL_GET, USERS_ME_GET, } from '../../const';

// Указываем cmd название объектов должно быть уникальным поэтому отдельно записываем их названия в const.js
// Чтобы не париться с изменениями в эндоинтах тоже выносим const.js
export const commands = {
  SIGNUP_CMD_POST: { method: 'POST', url: AUTH_SIGNUP_POST },
  SIGNIN_CMD_POST: { method: 'POST', url: AUTH_SIGNIN_POST },
  
  USERS_ALL_CMD_GET: { method: 'GET', url: USERS_ALL_GET },
  USERS_ME_CMD_GET: { method: 'GET', url: USERS_ME_GET },
}