import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/index.css';
import Navbar from './components/Navbar';
import Views from './Views';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Views />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
