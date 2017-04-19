import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import { Provider } from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
