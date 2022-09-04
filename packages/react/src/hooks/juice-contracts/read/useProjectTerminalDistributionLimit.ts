import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBController } from '../contracts/useJBController';

export const ETH_TOKEN_ADDRESS = '0x000000000000000000000000000000000000eeee';

type DataType = {
  distributionLimit: BigNumber;
  distributionLimitCurrency: BigNumber;
};

export default function useProjectTerminalDistributionLimit({
  projectId,
  configuration,
  terminalAddress,
}: {
  projectId: ProjectId;
  configuration: string;
  terminalAddress: string;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const contract = useJBController();

  useEffect(() => {
    if (!contract) return;

    setLoading(true);

    contract
      .distributionLimitOf(
        projectId,
        configuration,
        terminalAddress,
        ETH_TOKEN_ADDRESS,
      )
      .then(data => {
        setLoading(false);
        setData({
          distributionLimit: data?.[0],
          distributionLimitCurrency: data?.[1],
        });
      })
      .catch(e => {
        setError(e);
      });
  }, [
    projectId,
    configuration,
    terminalAddress,
    setLoading,
    setData,
    setError,
    provider,
  ]);

  return { loading, data, error };
}
