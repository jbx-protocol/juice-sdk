import { useContext, useEffect } from 'react';
import { getJBProjects } from 'juice-sdk';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from '../../../contexts/JuiceContext';
import useHookState from '../../useContractReadState';

type DataType = string;

export default function useProjectMetadataContent({
  projectId,
  domain,
}: {
  projectId: ProjectId;
  domain: string;
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

    getJBProjects(provider)
      .metadataContentOf(projectId, domain)
      .then(cid => {
        setLoading(false);
        setData(cid);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, domain, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
