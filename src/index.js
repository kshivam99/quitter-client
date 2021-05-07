import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./contexts/authContext";
import { ProgressProvider } from "./contexts/progressContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

