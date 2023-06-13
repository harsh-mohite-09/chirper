import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import './index.css';
import AuthProvider from './context/authContext';
import DataProvider from './context/dataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call make Server
makeServer();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <ColorModeScript />
        <ToastContainer />
        <App />
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
