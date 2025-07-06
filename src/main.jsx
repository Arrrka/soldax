import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/base/index.css';
import App from './App.jsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://127.0.0.1:5173/soldax/tonconnect-manifest.json">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TonConnectUIProvider>,
);
