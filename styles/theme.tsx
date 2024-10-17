"use client";

import {useDarkMode} from "@/common/hooks/useDarkMode";

export function ThemedHTML({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      {children}
    </html>
  );
}
