import './App.css';
import { LanguageSwitcher} from './components/index'
import CodingForBread from './components/CodingForBread'
import {TranslationProvider} from './providers/TranslationProvider'
const App = () => {

  return (
    <TranslationProvider>
      <LanguageSwitcher />
       <CodingForBread />
    </TranslationProvider>

  );
}

export default App;
