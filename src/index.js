import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './globalStyles.jsx';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/config/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);

reportWebVitals();
