import { IRootState, rootReducer } from '../reducers';
import { createStore, Middleware, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const router = routerMiddleware(createBrowserHistory());

let middlewares: Middleware[] = [router, sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  const loggerMiddleware = createLogger({ collapsed: true, duration: true });
  middlewares = [...middlewares, loggerMiddleware];
}

export function configureStore(initialState?: IRootState): Store<IRootState> {
  const store: Store<IRootState> = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
