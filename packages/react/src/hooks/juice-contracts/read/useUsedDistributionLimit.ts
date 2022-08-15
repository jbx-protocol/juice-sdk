import { useContext, useEffect } from 'react';
import { getJBSingleTokenPaymentTerminalStore } from '@juice-sdk/core';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

type DataType = BigNumber;

export default function useUsedDistributionLimit({
  terminalAddress,
  projectId,
  fundingCycleNumber,
}: {
  terminalAddress: string;
  projectId: ProjectId;
  fundingCycleNumber: BigNumber;
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
      .usedDistributionLimitOf(terminalAddress, projectId, fundingCycleNumber)
      .then(usedDistributionLimit => {
        setLoading(false);
        setData(usedDistributionLimit);
      })
      .catch(e => {
        setError(e);
      });
  }, [
    projectId,
    terminalAddress,
    fundingCycleNumber,
    provider,
    setLoading,
    setData,
    setError,
  ]);

  return { loading, data, error };
}
