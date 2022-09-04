import { useContext, useEffect } from 'react';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBFundingCycleStore } from '../contracts/useJBFundingCycleStore';

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
  } = useContractReadState<DataType>();

  const contract = useJBFundingCycleStore();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
