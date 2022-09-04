import { ContractReadHookResponse, ProjectId } from '../../../types';
import { useJBTokenStore } from '../contracts/useJBTokenStore';
import { JBTokenStore } from 'juice-sdk';
import { useContractRead } from '../../../hooks/useContractRead';

type DataType = string;

export default function useProjectToken({
  projectId,
}: {
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const contract = useJBTokenStore();
  if (!contract) return { data: undefined, loading: false, error: undefined };
  return useContractRead<JBTokenStore, DataType>({
    contract,
    functionName: 'tokenOf',
    args: [projectId],
  });
}
