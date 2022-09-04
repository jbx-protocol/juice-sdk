import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBTokenStore } from '../contracts/useJBTokenStore';

type DataType = BigNumber;

export default function useProjectTokenSupply({
  projectId,
}: {
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBTokenStore();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
      .totalSupplyOf(projectId)
      .then(supply => {
        setLoading(false);
        setData(supply);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
