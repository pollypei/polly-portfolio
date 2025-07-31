// src/components/providers/theme-provider.tsx
'use client';

import * as React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  // 暫時簡化，直接返回 children
  // 之後可以安裝 next-themes 來實現完整的主題切換功能
  return <>{children}</>;
}
