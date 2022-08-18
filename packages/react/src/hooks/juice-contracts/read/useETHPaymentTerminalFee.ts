import { useContext, useEffect } from 'react';
import { getJBETHPaymentTerminal } from 'juice-sdk';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from 'contexts/JuiceContext';
import useContractReadState from 'hooks/state/useContractReadState';

type DataType = BigNumber;

export default function useETHPaymentTerminalFee(): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  useEffect(() => {
    setLoading(true);

    getJBETHPaymentTerminal(provider)
      .fee()
      .then((fee: BigNumber) => {
        setLoading(false);
        setData(fee);
      })
      .catch(e => {
        setError(e);
      });
  }, [setLoading, setData, setError, provider]);

  return { loading, data, error };
}
