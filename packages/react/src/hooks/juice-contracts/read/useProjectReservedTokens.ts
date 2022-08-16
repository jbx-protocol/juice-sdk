import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { getJBController } from 'juice-sdk';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

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
  } = useHookState<DataType>();

  useEffect(() => {
    setLoading(true);

    getJBController(provider)
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
