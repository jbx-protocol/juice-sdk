import { useContext, useEffect } from 'react';
import { getJBSingleTokenPaymentTerminalStore } from 'juice-sdk';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useContractReadState';

type DataType = BigNumber;

export default function useTerminalCurrentOverflow({
  terminalAddress,
  projectId,
}: {
  terminalAddress: string;
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useHookState<DataType>();

  useEffect(() => {
    setLoading(true);

    getJBSingleTokenPaymentTerminalStore(provider)
      .currentOverflowOf(terminalAddress, projectId)
      .then(overflow => {
        setLoading(false);
        setData(overflow);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, terminalAddress, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
