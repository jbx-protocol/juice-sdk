import { useContext, useEffect } from 'react';
import { getJBDirectory } from 'juice-sdk';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';

type DataType = string[];

export default function useProjectTerminals({
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

  useEffect(() => {
    setLoading(true);

    getJBDirectory(provider)
      .terminalsOf(projectId)
      .then(terminals => {
        setLoading(false);
        setData(terminals);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
