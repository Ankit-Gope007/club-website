'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function CustomThemeProvider({ children }: Props) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
      </ThemeProvider>
    </>
  );
}
