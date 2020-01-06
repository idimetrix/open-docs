import { takeLatest } from 'redux-saga/effects';
import { AuthActionsTypes } from '../actions/auth';

function* login(action: any) {
  yield 1;
}

export default function* authSaga() {
  yield takeLatest(AuthActionsTypes.LOGIN_ACTION_REQUEST, login);
}
