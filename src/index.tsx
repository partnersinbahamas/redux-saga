import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
