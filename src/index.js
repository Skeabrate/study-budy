import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { worker } from "./mocks/browser"

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})

