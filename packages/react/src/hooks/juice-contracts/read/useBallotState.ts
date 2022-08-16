import { useContext, useEffect } from 'react';
import { getJBFundingCycleStore } from 'juice-sdk';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

export enum BallotState {
  'Active' = 0,
  'Approved' = 1,
  'Failed' = 2,
}

type DataType = BallotState;

export default function useBallotState({
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
  } = useHookState<DataType>();

  useEffect(() => {
    setLoading(true);

    getJBFundingCycleStore(provider)
      .currentBallotStateOf(projectId)
      .then(owner => {
        setLoading(false);
        setData(owner);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
