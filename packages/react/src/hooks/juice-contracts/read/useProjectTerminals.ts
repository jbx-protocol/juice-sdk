import { useContext, useEffect } from 'react';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBDirectory } from '../contracts/useJBDirectory';

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

  const contract = useJBDirectory();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
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
