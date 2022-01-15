import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { signupReducer } from './reducers/registration';
import { usersReducer } from './reducers/usersReducer';
import { loginReducer } from './reducers/loginReducer';
import { usersMe } from './reducers/users';
import { allUser } from './reducers/ALL_USERS';

const rootReducer = combineReducers({
  signupReducer,
  usersReducer,
  loginReducer,
  usersMe,
  allUser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))