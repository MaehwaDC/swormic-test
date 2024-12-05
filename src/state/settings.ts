import { getSettings } from '../api/settings';
import { useEffect, useState } from 'react';
import { ISettings } from '../types/Settings';
import { useFetchState } from '../hooks/useFetchState';

export const useSettings = () => {
  const [settings, setSettings] = useState<ISettings | null>(null);

  const [fetch, isLoading, error] = useFetchState(getSettings);
  useEffect(() => {
    fetch().then((data) => setSettings(data));
  }, []);

  return { settings, isLoading, error };
};

export const useLocales = () => {
  const { settings, ...options } = useSettings();

  return { locale: settings?.locales[1], locales: settings?.locales, ...options } as const;
};
