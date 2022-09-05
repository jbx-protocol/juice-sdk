import { BigNumber } from '@ethersproject/bignumber';
import {
  TransactionResponse,
  usePrepareContractWrite,
} from '../../../hooks/usePrepareContractWrite';
import { JBETHPaymentTerminal } from 'juice-sdk';
import { useJBETHPaymentTerminal } from '../contracts';
import { ETH_TOKEN_ADDRESS } from '../../../constants/addresses';

interface TransactionArgs {
  projectId: number;
  value: BigNumber;
  preferClaimedTokens?: boolean;
  beneficiary?: string;
  memo?: string;
}

type TransactionFunction = (
  args: TransactionArgs,
) => Promise<TransactionResponse>;

const DEFAULT_DELEGATE_METADATA = 0;
const DEFAULT_MIN_RETURNED_TOKENS = 0; // TODO will need a field for this in V2ConfirmPayOwnerModal

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
    const txArgs = [
      args.projectId,
      args.value,
      ETH_TOKEN_ADDRESS,
      args.beneficiary,
      DEFAULT_MIN_RETURNED_TOKENS, // minReturnedTokens
      args.preferClaimedTokens, // _preferClaimedTokens
      args.memo || '',
      DEFAULT_DELEGATE_METADATA, //delegateMetadata
    ];
    const txOverrides = { value: args.value };
    console.log(txArgs)
    return transaction(txArgs, txOverrides);
  };
}
