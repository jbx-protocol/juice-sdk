import { useContext, useEffect } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import useWalletTotalTokenBalance from './useWalletTotalTokenBalance';
import { useJBSingleTokenPaymentTerminalStore } from '../contracts/useJBSingleTokenPaymentTerminalStore';

type DataType = BigNumber;

export default function useTerminalCurrentReclaimableOverflow({
  projectId,
  walletAddress,
  terminalAddress,
}: {
  projectId: ProjectId;
  walletAddress: string;
  terminalAddress: string;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setLoading, setData, setError },
  } = useContractReadState<DataType>();

  const { data: totalBalance } = useWalletTotalTokenBalance({
    walletAddress,
    projectId,
  });

  const contract = useJBSingleTokenPaymentTerminalStore();

  useEffect(() => {
    if (!totalBalance || !contract) return;

    setLoading(true);

    contract['currentReclaimableOverflowOf(address,uint256,uint256,bool)'](
      terminalAddress,
      projectId,
      totalBalance,
      false, // _useTotalOverflow (just using 1 terminal for now)
    )
      .then(overflow => {
        setLoading(false);
        setData(overflow);
      })
      .catch(e => {
        setError(e);
      });
  }, [
    projectId,
    walletAddress,
    terminalAddress,
    setLoading,
    setData,
    setError,
    provider,
    totalBalance,
  ]);

  return { loading, data, error };
}
