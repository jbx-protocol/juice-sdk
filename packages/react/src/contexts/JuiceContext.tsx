import { createContext, PropsWithChildren } from 'react';
import { BaseProvider } from '@ethersproject/providers';
import React from 'react';

type NetworkName = 'rinkeby' | 'mainnet';

export interface JuiceContextData {
  provider?: BaseProvider;
  networkName: NetworkName;
}

export const JuiceContext: React.Context<JuiceContextData> = createContext({
  networkName: 'mainnet' as NetworkName,
});

export function JuiceProvider({
  provider,
  networkName = 'mainnet',
  children,
}: PropsWithChildren<JuiceContextData>) {
  return (
    <JuiceContext.Provider
      value={{
        provider,
        networkName,
      }}
    >
      {children}
    </JuiceContext.Provider>
  );
}
