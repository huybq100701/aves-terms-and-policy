import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ui } from '../content';
import type { UiStrings } from '../content';
import type { Lang } from '../content/types';

const STORAGE_KEY = 'aves-legal-lang';

interface LangValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: UiStrings;
}

const LangContext = createContext<LangValue | null>(null);

function detectLang(): Lang {
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery === 'vi' || fromQuery === 'en') return fromQuery;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'vi' || stored === 'en') return stored;
  } catch {
    // localStorage can be blocked; fall through to browser language
  }

  return navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // preference simply isn't remembered
    }
  }, []);

  const value = useMemo<LangValue>(() => ({ lang, setLang, t: ui[lang] }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangValue {
  const value = useContext(LangContext);
  if (!value) throw new Error('useLang must be used inside LangProvider');
  return value;
}

export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
