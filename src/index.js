import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthService from './components/service/auth_service';
import { firebaseApp } from './components/service/firebase';
import ImgInput from './components/img_input/img_input';

const loginService = new AuthService(firebaseApp);
const ImgInputButton = (props) => (<ImgInput {...props}/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App loginService={loginService} ImgInputButton={ImgInputButton} />
  </React.StrictMode>
);


