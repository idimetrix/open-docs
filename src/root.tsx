import React, { FC } from 'react';
import { Store } from 'redux';
import { IRootState } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './containers/Login';
import App from './containers/App';

interface IRootProps {
  readonly store: Store<IRootState>;
}

const Root: FC<IRootProps> = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" name="App" component={App} />
        <Route exact={true} path="/login" name="Login" component={Login} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
