import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres medir el rendimiento en tu aplicación, puedes pasar una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviarlo a un endpoint de analíticas. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
