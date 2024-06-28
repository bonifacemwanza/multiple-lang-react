import './App.css';
import { LanguageSwitcher } from './components/index';
import ExampleComponent from './components/ExampleComponent';
import { TranslationProvider } from './providers/TranslationProvider';

const App = () => {
  return (
    <TranslationProvider>
      <LanguageSwitcher />
      <ExampleComponent />
    </TranslationProvider>
  );
};

export default App;
