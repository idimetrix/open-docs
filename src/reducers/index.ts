import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

export interface IRootState {
  readonly router: RouterState;
}

export const rootReducer = combineReducers<IRootState>({
  router: routerReducer
});
