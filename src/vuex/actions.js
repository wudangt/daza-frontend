import account from '../api/account';
import {
  UNAUTHORIZED,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './mutation-types';

export const unauthorized = ({ dispatch }) => {
  dispatch(UNAUTHORIZED);
};

export const register = ({ dispatch }, username, email, password) => {
  const req = account.login(username, email, password).then((data) => {
    dispatch(REGISTER_SUCCESS, data);
    return Promise.resolve(data);
  })
  .catch((error) => Promise.reject(error));
  return req;
};

export const login = ({ dispatch }, email, password) => {
  const req = account.login(email, password).then((data) => {
    dispatch(LOGIN_SUCCESS, data);
    return Promise.resolve(data);
  })
  .catch((error) => Promise.reject(error));
  return req;
};

export const logout = ({ dispatch }) => {
  const req = account.logout().then(() => {
    dispatch(LOGOUT_SUCCESS);
    return Promise.resolve();
  })
  .catch((error) => Promise.reject(error));
  return req;
};
