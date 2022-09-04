import { BigNumber } from '@ethersproject/bignumber';
import {
  TransactionResponse,
  usePrepareContractWrite,
} from '../../../hooks/usePrepareContractWrite';
import { JBETHPaymentTerminal } from 'juice-sdk';
import { useJBETHPaymentTerminal } from '../contracts';

interface TransactionArgs {
  memo: string;
  preferClaimedTokens: boolean;
  beneficiary?: string;
  value: BigNumber;
}

type TransactionFunction = (
  args: TransactionArgs,
) => Promise<TransactionResponse>;

export function usePreparePayETHPaymentTerminal():
  | TransactionFunction
  | undefined {
  const contract = useJBETHPaymentTerminal();

  if (!contract) return;

  const transaction = usePrepareContractWrite<JBETHPaymentTerminal>({
    contract,
    functionName: 'pay',
  });

  return (args: TransactionArgs) => {
    const txArgs = [args.memo];
    const txOverrides = { value: args.value };

    return transaction(txArgs, txOverrides);
  };
}
