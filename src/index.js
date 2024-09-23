import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { UserAuth } from './USeContext/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserAuth>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserAuth>
  </BrowserRouter>
);


