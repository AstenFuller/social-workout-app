import { combineReducers } from 'redux';
import loginRegisterReducer from './components/LoginRegister/loginRegisterReducer';
import { registerReducer } from './components/Register/registerReducer';

const rootReducer = combineReducers({
  loginRegister: loginRegisterReducer,
  register: registerReducer
});
export default rootReducer;
