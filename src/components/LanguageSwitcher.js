import React from 'react'
import {useTranslation} from '../providers/TranslationProvider'

export const LanguageSwitcher = () => {
    const {setLanguage} = useTranslation()
  return (
    <div>
        <button onClick={()=> setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Spanish</button>
        <button onClick={() => setLanguage('fr')}>French</button>
    </div>
  )
}

