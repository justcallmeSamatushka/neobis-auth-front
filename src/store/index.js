import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { signupReducer } from './reducers/registration';

const rootReducer = combineReducers({
  signupReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))