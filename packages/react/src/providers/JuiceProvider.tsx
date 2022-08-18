import { PropsWithChildren } from 'react';
import { JsonRpcProvider } from '@ethersproject/providers';

import { JuiceContext } from '../contexts/JuiceContext';

export default function JuiceProvider({
  provider,
  networkName,
  children,
}: PropsWithChildren<{
  provider: JsonRpcProvider;
  networkName?: 'rinkeby' | 'mainnet';
}>) {
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
