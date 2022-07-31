import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ loginService, ImgInputButton }) {
  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login loginService={loginService}/>} />
        <Route path='/maker' element={<Maker ImgInputButton={ImgInputButton}/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
