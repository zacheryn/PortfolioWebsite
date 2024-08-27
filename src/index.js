import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './index.css';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Zachery Nagy</title>
        <meta name="description" content="Zachery Nagy portfolio."/>
      </Helmet>
      <Portfolio />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
