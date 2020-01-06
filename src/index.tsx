import './styles/_index.scss';

import React from 'react';
import { Store } from 'redux';
import { IRootState } from './reducers';
import { configureStore } from './store';
import { render } from 'react-dom';
import Root from './root';

const store: Store<IRootState> = configureStore();
const node = document.getElementById('root');

render(<Root store={store} />, node);
