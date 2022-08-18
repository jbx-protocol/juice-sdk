import { ContractReadHookResponse, ProjectId } from 'types';
import { useContractRead } from '../../useContractRead';
import { JBProjects } from 'juice-sdk/dist/cjs/types/contracts';
import { useJBProjects } from '../contracts/useJBProjects';

type DataType = string;

export default function useProjectOwner({
  projectId,
}: {
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const contract = useJBProjects();
  return useContractRead<JBProjects, DataType>({
    contract,
    functionName: 'ownerOf',
    args: [projectId],
  });
}
