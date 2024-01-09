import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <Routes>
        <Route path='/kakao/login' element={<Auth />}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// < BrouserRouter: History API를 사용해 현재 위치의 URL을 저장해주는 역할 >
reportWebVitals();
// http://localhost:8080/kakao/login?code=ZDmt3H9vfp-eZ9RcTKYWI46xSq8qGFMi34HTieCwdSP_48qD1CK83TSHCTUKKcjYAAABjOzy0_hV7imzm104lw