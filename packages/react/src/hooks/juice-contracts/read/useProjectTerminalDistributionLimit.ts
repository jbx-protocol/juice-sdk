import { useContext, useEffect } from 'react';
import { getJBController } from 'juice-sdk';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from 'types';

import { JuiceContext } from 'contexts/JuiceContext';
import useContractReadState from 'hooks/state/useContractReadState';

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

  useEffect(() => {
    setLoading(true);

    getJBController(provider)
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
