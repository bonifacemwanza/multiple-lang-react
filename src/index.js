import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TranslationProvider } from 'react-google-multi-lang';
import App from './App.js';
import './index.css';

// Use your API key here

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TranslationProvider apiKey={process.env.REACT_APP_TRANSLATION_API} defaultLanguage="en">
      <App />
    </TranslationProvider>
  </BrowserRouter>
);
