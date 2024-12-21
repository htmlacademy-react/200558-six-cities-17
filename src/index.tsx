import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { offersCities } from './mocks/offers.ts';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offersCities}/>
  </React.StrictMode>
);
