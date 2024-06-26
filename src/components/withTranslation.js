import React, { useEffect,useMemo, useState} from 'react'
import { useTranslation } from '../providers/TranslationProvider'

export const withTranslation = (Component) => {
    return (props) => {
        const {language, translateText} = useTranslation()
        const {translatedHTML, setTranslatedHtml} = useState(null)

        useEffect(() => {
            const translateElement = async (element) => {
                if(element.nodeType === Node.TEXT_NODE &&  element.nodeValue.trim()){
                    const translated = await translateText(element.value, language)
                    element.nodeValue = translated
                }
                if(element.childNodes && element.childNodes.length > 0){
                    for(let i = 0; i < element.childNodes.length; i++){
                        await translateElement(element.childNodes[i])

                    }
                    
                }
            }
            const translateContent = async () => {
                const container = document.createElement('div');
                container.innerHTML = Component(props).props.children;
                await translateContent(container)
                setTranslatedHtml(container)
            }

            translateContent()
        }, [language,props, translateText]);
        const memoizedContent = useMemo(() => translatedHTML, [translatedHTML]);


        return (
           <Component {...props} >
              <div dangerouslySetInnerHTML={{__html: memoizedContent}}> </div>
            </Component>
        );
    }

   
}