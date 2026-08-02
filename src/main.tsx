import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './app/provider';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
);
