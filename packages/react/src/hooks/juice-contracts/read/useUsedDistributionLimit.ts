import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBSingleTokenPaymentTerminalStore } from '../contracts/useJBSingleTokenPaymentTerminalStore';

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
  } = useContractReadState<DataType>();

  const contract = useJBSingleTokenPaymentTerminalStore();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
