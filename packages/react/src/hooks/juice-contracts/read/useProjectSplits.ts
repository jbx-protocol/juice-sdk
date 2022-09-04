import { BigNumber } from '@ethersproject/bignumber';
import { useContext, useEffect } from 'react';
import { Split, SplitGroup } from '../../../types/splits';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useJBSplitsStore } from '../contracts/useJBSplitsStore';

type SplitResult = {
  percent: BigNumber;
  lockedUntil: BigNumber;
  projectId: BigNumber;
  beneficiary: string;
  allocator: string;
  preferClaimed: boolean;
};

const formatSplitResult = (splitResult: SplitResult[]): Split[] => {
  return splitResult.map((split: SplitResult) => {
    return {
      percent: split.percent.toNumber(),
      lockedUntil: split.lockedUntil.toNumber(),
      projectId: split.projectId.toNumber(),
      beneficiary: split.beneficiary,
      allocator: split.allocator,
      preferClaimed: split.preferClaimed,
    };
  });
};

type DataType = Split[];

export default function useProjectSplits({
  projectId,
  splitGroup,
  domain,
}: {
  projectId: ProjectId | undefined;
  splitGroup: SplitGroup;
  domain: string | undefined;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBSplitsStore();

  useEffect(() => {
    if (!projectId || !splitGroup || !domain || !contract) return;

    setLoading(true);

    contract
      .splitsOf(projectId, domain, splitGroup)
      .then(splits => {
        setLoading(false);
        setData(formatSplitResult(splits));
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, splitGroup, domain, setLoading, setData, setError, provider]);

  return { loading, data, error };
}
