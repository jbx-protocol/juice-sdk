import React, { useCallback, useContext } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { ContractReadHookResponse, ProjectId } from '../../../types';
import { JuiceContext } from '../../../contexts/JuiceContext';
import { useContractReadState } from '../../../hooks/state/useContractReadState';
import { useJBSingleTokenPaymentTerminalStore } from '../contracts/useJBSingleTokenPaymentTerminalStore';
import { useJBDirectory } from '../contracts/useJBDirectory';

type DataType = BigNumber;

export default function useProjectPrimaryTerminalBalance({
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

  const JBDirectory = useJBDirectory();
  const JBSingleTokenPaymentTerminalStore =
    useJBSingleTokenPaymentTerminalStore();

  const getBalance = useCallback(
    async (projectId: ProjectId) => {
      if (!(JBDirectory && JBSingleTokenPaymentTerminalStore)) return;

      const terminals = await JBDirectory.terminalsOf(projectId);
      const primaryTerminal = terminals[0];

      const balance = await JBSingleTokenPaymentTerminalStore.balanceOf(
        primaryTerminal,
        projectId,
      );

      return balance;
    },
    [provider],
  );

  React.useEffect(() => {
    setLoading(true);

    getBalance(projectId)
      .then(balance => {
        setLoading(false);
        setData(balance);
      })
      .catch(e => {
        setError(e);
      });
  }, [projectId, setLoading, setData, setError, provider, getBalance]);

  return { loading, data, error };
}
