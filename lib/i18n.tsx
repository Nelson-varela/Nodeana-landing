'use client';

import { createContext, useContext, useState } from 'react';
import { translations, Lang } from './translations';

// Derive a writable (non-literal) shape so both 'en' and 'es' satisfy it
export type Translations = {
  [K in keyof typeof translations.en]: (typeof translations.en)[K] extends readonly (infer _)[]
    ? unknown[]
    : Record<string, unknown>;
};

// We use a simpler approach: just use the 'en' shape but with mutable strings
type T = typeof translations.en;

const LangContext = createContext<{
  t: T;
  lang: Lang;
  setLang: (l: Lang) => void;
} | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LangContext.Provider value={{ t: translations[lang] as unknown as T, lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useT must be used inside LangProvider');
  return ctx;
}
