import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';

ReactDOM.render(
  <React.StrictMode>
    <Topbar/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();