import React, { ReactNode } from 'react';

import { WindowDimensionsProvider } from './windowDimensions';
import { AuthProvider } from './auth';
import { ProjectSelectedProvider } from './projectSelected';

interface AppProviderProps {
  children: ReactNode;
}
export function AppProvider({ children }: AppProviderProps) {
  return (
    <WindowDimensionsProvider>
      <AuthProvider>
        <ProjectSelectedProvider>{children}</ProjectSelectedProvider>
      </AuthProvider>
    </WindowDimensionsProvider>
  );
}
