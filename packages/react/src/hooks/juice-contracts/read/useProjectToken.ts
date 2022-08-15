import { useContext, useEffect } from 'react';
import { getJBTokenStore } from '@juice-sdk/core';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useHookState';

type DataType = string;

export default function useProjectToken({
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

    getJBTokenStore(provider)
      .tokenOf(projectId)
      .then(token => {
        setLoading(false);
        setData(token);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
