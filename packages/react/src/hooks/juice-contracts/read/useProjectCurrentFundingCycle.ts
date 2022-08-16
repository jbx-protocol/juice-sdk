import { useContext, useEffect } from 'react';
import { getJBController } from 'juice-sdk';
import { FundingCycleData, FundingCycleMetadata } from 'types/fundingCycle';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

type DataType = {
  fundingCycleData: FundingCycleData;
  fundingCycleMetadata: FundingCycleMetadata;
};

export default function useProjectCurrentFundingCycle({
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

    getJBController(provider)
      .currentFundingCycleOf(projectId)
      .then(data => {
        setLoading(false);
        setData({
          fundingCycleData: data?.[0],
          fundingCycleMetadata: data?.[1],
        });
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, provider, setLoading, setData, setError]);

  return { loading, data, error };
}
