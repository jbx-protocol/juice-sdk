import { useContext, useEffect } from 'react';
import { getJBTokenStore } from '@juice-sdk/core';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

type DataType = BigNumber;

export default function useWalletUnclaimedTokenBalance({
  walletAddress,
  projectId,
}: {
  walletAddress: string;
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

    getJBTokenStore(provider)
      .unclaimedBalanceOf(walletAddress, projectId)
      .then(balance => {
        setLoading(false);
        setData(balance);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, walletAddress, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
