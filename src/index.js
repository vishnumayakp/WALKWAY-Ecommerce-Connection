import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { UserAuth } from './USeContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserAuth>
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>
  </UserAuth>
  </BrowserRouter>
);


