import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Filter from './components/filter/filter';


const YearFilter = (props) => <Filter {...props} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App YearFilter={YearFilter} />
  </React.StrictMode>
);


