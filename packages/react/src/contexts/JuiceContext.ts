import { createContext } from 'react';
import { BaseProvider } from '@ethersproject/providers';

type NetworkName = 'rinkeby' | 'mainnet';

export const JuiceContext: React.Context<{
  provider?: BaseProvider;
  networkName: NetworkName;
}> = createContext({ networkName: 'mainnet' as NetworkName });
