import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './store/index';
import { Root } from './store/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();

root.render(<Root store={store} />);

// If you want to start measuring performance in your app, pass a function
