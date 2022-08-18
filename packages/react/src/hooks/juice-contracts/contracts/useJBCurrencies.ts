/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBCurrencies } from 'juice-sdk';

import { JuiceContext } from '../../../contexts/JuiceContext';

export function useJBCurrencies() {
  const { provider } = useContext(JuiceContext);

  return getJBCurrencies(provider);
}
