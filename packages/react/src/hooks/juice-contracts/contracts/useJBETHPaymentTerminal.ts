/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBETHPaymentTerminal } from 'juice-sdk';

import { JuiceContext } from '../../../contexts/JuiceContext';

export function useJBETHPaymentTerminal() {
  const { provider, networkName } = useContext(JuiceContext);
  if (!provider) return;

  return getJBETHPaymentTerminal(provider, { network: networkName });
}
