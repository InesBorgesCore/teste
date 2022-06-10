import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if(window.cordova){
  document.addEventListener("deviceready", startApp, false); // Para o browser
}else {
  startApp(); // Para mobile
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
