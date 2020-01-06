import { action } from 'typesafe-actions';

export enum AuthActionsTypes {
  LOGIN_ACTION_REQUEST = 'LOGIN_ACTION_REQUEST',
  LOGIN_ACTION_SUCCESS = 'LOGIN_ACTION_SUCCESS',
  LOGIN_ACTION_FAILURE = 'LOGIN_ACTION_FAILURE'
}

const loginAction = (payload: any) => {
  return action(AuthActionsTypes.LOGIN_ACTION_REQUEST, payload);
};

const loginSuccess = (payload?: any) => {
  return action(AuthActionsTypes.LOGIN_ACTION_SUCCESS, payload);
};

const loginFailure = (payload?: any) => {
  return action(AuthActionsTypes.LOGIN_ACTION_FAILURE, payload);
};

export { loginAction, loginSuccess, loginFailure };
