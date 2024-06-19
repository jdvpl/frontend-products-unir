import { useState, useEffect } from 'react';

export function getSessionStorageOrDefault<T>(
  key: string,
  defaultValue: T | (() => T)
): T {
  let stored: string | null = null;

  if (typeof window !== 'undefined') {
    stored = sessionStorage.getItem(key);
  }

  if (!stored) {
    return typeof defaultValue === 'function'
      ? (defaultValue as () => T)()
      : (defaultValue as T);
  }

  try {
    return JSON.parse(stored) as T;
  } catch {
    return typeof defaultValue === 'function'
      ? (defaultValue as () => T)()
      : (defaultValue as T);
  }
}

export function useSessionStorage<T = any>(
  key: string,
  defaultValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => getSessionStorageOrDefault(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
