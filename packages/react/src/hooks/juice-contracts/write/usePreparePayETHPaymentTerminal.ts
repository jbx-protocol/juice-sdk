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

export function usePreparePayETHPaymentTerminal(): (
  args: TransactionArgs,
) => Promise<TransactionResponse> {
  const contract = useJBETHPaymentTerminal();

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
