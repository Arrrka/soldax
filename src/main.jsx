import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/base/index.css';
import App from './App.jsx';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://arrrka.github.io/soldax/tonconnect-manifest.json">
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TonConnectUIProvider>,
);
