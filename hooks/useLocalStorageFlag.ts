"use client";

import { useEffect, useState } from "react";

export function useLocalStorageFlag(key: string, defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(key);
    if (raw !== null) setValue(raw === "1");
    setReady(true);
  }, [key]);

  const update = (next: boolean) => {
    setValue(next);
    localStorage.setItem(key, next ? "1" : "0");
  };

  return { value, setValue: update, ready };
}
