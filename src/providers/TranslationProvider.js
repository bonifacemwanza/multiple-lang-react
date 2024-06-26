import axios from 'axios';
import { useContext, createContext,useState } from 'react';

const TranslationContext = createContext();

const TRANSLATION_API_KEY = process.env.REACT_APP_TRANSLATION_API;
const URL = 'https://translation.googleapis.com/language/translate/v2';

export const TranslationProvider = ({children}) => {

    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState({});

    const translateText = async (text, targetedLang) => {
        if(translations[text]) {
            return translations[text]
        }
  
        try {
            const response = await axios.post(URL, null, {
                params:{
                    q:text,
                    target:targetedLang,
                    key:TRANSLATION_API_KEY
                }
            })
            const translatedText = response.data.data.translations[0].translatedText;
            setTranslations((prev) => ({ ...prev, [text]: translatedText }));
            return translatedText;

        } catch (error) {
            console.log("Error translating document")
            return null
        }
    }
    return (
        <TranslationContext.Provider value={{language,setLanguage,translateText}}>
           {children}
        </TranslationContext.Provider>
    )
}

export const useTranslation = () => useContext(TranslationContext)