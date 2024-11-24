declare module 'react-google-multi-lang' {
  import React, { ReactNode } from 'react';

  export interface TranslationProviderProps {
    apiKey: string;
    defaultLanguage: string;
    children: ReactNode;
  }

  export const TranslationProvider: React.FC<TranslationProviderProps>;

  export function useTranslation(): {
    setLanguage: (language: string) => void;
    translateText: (text: string) => Promise<string>;
  };

  export function withTranslation<T>(
    Component: React.ComponentType<T>
  ): React.ComponentType<T>;
}
