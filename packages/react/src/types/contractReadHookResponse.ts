export interface ContractReadHookResponse<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
}
