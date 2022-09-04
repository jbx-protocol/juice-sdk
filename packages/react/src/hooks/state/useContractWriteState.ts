import { useState } from 'react';

type HookStateActions<T> = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
  setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
};

export type ContractWriteHookResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
};

export function useContractWriteState<T>(
  defaultData?: T,
): ContractWriteHookResponse<T> & {
  actions: HookStateActions<T>;
} {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(defaultData);
  const [error, setError] = useState<Error>();

  return { loading, data, error, actions: { setLoading, setData, setError } };
}
