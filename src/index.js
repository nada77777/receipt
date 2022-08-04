import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthService from './components/service/auth_service';
import { firebaseApp } from './components/service/firebase';
import ImgInput from './components/img_input/img_input';
import ImgUpload from './components/service/img_upload';
import Database from './components/service/database';

const loginService = new AuthService(firebaseApp);
const imgUploader = new ImgUpload();
const ImgInputButton = (props) => (<ImgInput {...props} imgUploader={imgUploader}/>);
const database = new Database();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App loginService={loginService} ImgInputButton={ImgInputButton} imgUploader={imgUploader} database={database} />
  </React.StrictMode>
);


