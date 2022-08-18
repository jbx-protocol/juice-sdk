import { Contract } from '@ethersproject/contracts';
import { BigNumberish } from '@ethersproject/bignumber';

export interface TransactionOverrides {
  value?: BigNumberish;
}

type TransactionArgs = unknown[];

interface ContractWriteArgs<C extends Contract> {
  contract: C;
  functionName: keyof C['functions'];
  args?: TransactionArgs[];
  overrides?: TransactionOverrides;
}

// TODO implement
export interface TransactionResponse {}

export type ContractWriteFunction = (
  args: TransactionArgs,
  overrides: TransactionOverrides,
) => Promise<TransactionResponse>;

export function usePrepareContractWrite<C extends Contract>({
  contract,
  functionName,
}: ContractWriteArgs<C>): ContractWriteFunction {
  // TODO support callbacks for onDone, onError etc.
  return async (args: unknown[], overrides?: TransactionOverrides) => {
    const res = await contract[functionName](...args, overrides);
    return res;
  };
}
