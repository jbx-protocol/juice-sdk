import { useEffect } from 'react';
import { Contract } from '@ethersproject/contracts';
import useHookState from './useContractReadState';
import { ContractReadHookResponse } from 'types';

interface ContractReadArgs<C extends Contract> {
  contract: C;
  functionName: keyof C['functions'];
  args?: unknown[];
}

export function useContractRead<C extends Contract, D>({
  contract,
  functionName,
  args,
}: ContractReadArgs<C>): ContractReadHookResponse<D> {
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useHookState<D>();

  useEffect(() => {
    setLoading(true);

    (contract[functionName].apply(null, args) as Promise<D>)
      .then(response => {
        setLoading(false);
        setData(response);
      })
      .catch(e => {
        setError(e);
      });
  }, [setLoading, setData, setError, ...args]);

  return { loading, data, error };
}
