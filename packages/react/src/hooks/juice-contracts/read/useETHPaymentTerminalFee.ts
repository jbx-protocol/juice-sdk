import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBETHPaymentTerminal } from '../contracts/useJBETHPaymentTerminal';

type DataType = BigNumber;

export default function useETHPaymentTerminalFee(): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBETHPaymentTerminal();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
