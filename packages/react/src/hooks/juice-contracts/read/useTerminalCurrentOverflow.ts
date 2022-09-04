import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBSingleTokenPaymentTerminalStore } from '../contracts/useJBSingleTokenPaymentTerminalStore';

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
  } = useContractReadState<DataType>();

  const contract = useJBSingleTokenPaymentTerminalStore();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
