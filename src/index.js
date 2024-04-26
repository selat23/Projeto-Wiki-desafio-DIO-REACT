import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/App';
//import GlobalStyles from './styles'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
