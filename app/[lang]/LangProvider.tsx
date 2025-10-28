"use client";

import { useEffect } from "react";

export function LangProvider({ lang, children }: { lang: string; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}
