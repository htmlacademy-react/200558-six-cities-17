import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { offers} from './mocks/offers.ts';
import { Provider } from 'react-redux';
import {store} from './reducer.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App offers={offers}/>
    </React.StrictMode>
  </Provider>
);
