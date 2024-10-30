import React from 'react';
import ReactDOM from 'react-dom/client'; // Đảm bảo bạn đang sử dụng 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Sử dụng createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
