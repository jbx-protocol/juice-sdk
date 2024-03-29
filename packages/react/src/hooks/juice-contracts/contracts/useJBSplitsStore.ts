/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBSplitsStore } from 'juice-sdk';

import { JuiceContext } from '../../../contexts/JuiceContext';

export function useJBSplitsStore() {
  const { provider, networkName } = useContext(JuiceContext);
  if (!provider) return;

  return getJBSplitsStore(provider, { network: networkName });
}
