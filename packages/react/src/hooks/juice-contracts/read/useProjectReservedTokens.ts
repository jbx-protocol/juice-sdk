import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBController } from '../contracts/useJBController';

type DataType = BigNumber;

export default function useProjectReservedTokenBalance({
  projectId,
  reservedRate,
}: {
  projectId: ProjectId;
  reservedRate: BigNumber;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBController();

  useEffect(() => {
    if (!contract) return;
    setLoading(true);

    contract
      .reservedTokenBalanceOf(projectId, reservedRate)
      .then(balance => {
        setLoading(false);
        setData(balance);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider, reservedRate]);

  return { loading, data, error };
}
