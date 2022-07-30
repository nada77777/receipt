import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthService from './components/service/auth_service';
import { firebaseApp } from './components/service/firebase';

const loginService = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App loginService={loginService} />
  </React.StrictMode>
);


