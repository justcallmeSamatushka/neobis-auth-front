import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { signupReducer } from './reducers/registration';
import { usersReducer } from './reducers/usersReducer';
import { loginReducer } from './reducers/loginReducer';

const rootReducer = combineReducers({
  signupReducer,
  usersReducer,
  loginReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))