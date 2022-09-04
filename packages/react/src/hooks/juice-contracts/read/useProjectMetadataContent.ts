import { useContext, useEffect } from 'react';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBProjects } from '../contracts/useJBProjects';

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
  } = useContractReadState<DataType>();

  const contract = useJBProjects();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
