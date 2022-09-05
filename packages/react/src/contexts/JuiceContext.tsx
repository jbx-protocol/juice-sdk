import { createContext, PropsWithChildren } from 'react';
import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import React from 'react';

type NetworkName = 'rinkeby' | 'mainnet';

export interface JuiceContextData {
  provider?: Signer | Provider;
  networkName?: NetworkName;
}

export const JuiceContext: React.Context<JuiceContextData> = createContext({});

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
