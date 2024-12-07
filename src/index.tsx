import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {cards} from './mocks/offers.ts';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={cards}/>
  </React.StrictMode>
);
