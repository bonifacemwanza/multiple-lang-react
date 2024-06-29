import React from 'react';
import './App.css';
import { LanguageSwitcher } from './components/index';
import ExampleComponent from './components/ExampleComponent';
import { TranslationProvider } from 'react-google-multi-lang';



const App = () => {
  return (
    <TranslationProvider apiKey={process.env.REACT_APP_TRANSLATION_API} defaultLanguage="en">
      <LanguageSwitcher />
      <ExampleComponent />
    </TranslationProvider>
  );
};
App.displayName = 'App';

export default App;
