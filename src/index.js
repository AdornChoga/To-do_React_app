import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './stylesheets/index.css';
import Navbar from './components/Navbar';
import Views from './Views';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Views />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
