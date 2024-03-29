/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { Contract } from '@ethersproject/contracts';
import {
  abi as JBETHPaymentTerminalABI_mainnet,
  address as JBETHPaymentTerminalAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBETHPaymentTerminal.json';
import {
  abi as JBSingleTokenPaymentTerminalStoreABI_mainnet,
  address as JBSingleTokenPaymentTerminalStoreAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBSingleTokenPaymentTerminalStore.json';
import {
  abi as JBControllerABI_mainnet,
  address as JBControllerAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBController.json';
import {
  abi as JBFundingCycleStoreABI_mainnet,
  address as JBFundingCycleStoreAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBFundingCycleStore.json';
import {
  abi as JBSplitsStoreABI_mainnet,
  address as JBSplitsStoreAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBSplitsStore.json';
import {
  abi as JBCurrenciesABI_mainnet,
  address as JBCurrenciesAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBCurrencies.json';
import {
  abi as JBOperatorStoreABI_mainnet,
  address as JBOperatorStoreAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBOperatorStore.json';
import {
  abi as JBTokenStoreABI_mainnet,
  address as JBTokenStoreAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBTokenStore.json';
import {
  abi as JBDirectoryABI_mainnet,
  address as JBDirectoryAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBDirectory.json';
import {
  abi as JBPricesABI_mainnet,
  address as JBPricesAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBPrices.json';
import {
  abi as JBETHERC20ProjectPayerDeployerABI_mainnet,
  address as JBETHERC20ProjectPayerDeployerAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20ProjectPayerDeployer.json';
import {
  abi as JBProjectsABI_mainnet,
  address as JBProjectsAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBProjects.json';
import {
  abi as JBETHERC20SplitsPayerDeployerABI_mainnet,
  address as JBETHERC20SplitsPayerDeployerAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20SplitsPayerDeployer.json';
import {
  abi as JB3DayReconfigurationBufferBallotABI_mainnet,
  address as JB3DayReconfigurationBufferBallotAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JB3DayReconfigurationBufferBallot.json';
import {
  abi as JB7DayReconfigurationBufferBallotABI_mainnet,
  address as JB7DayReconfigurationBufferBallotAddress_mainnet,
} from '@jbx-protocol/contracts-v2/deployments/mainnet/JB7DayReconfigurationBufferBallot.json';
import {
  abi as JBETHPaymentTerminalABI_rinkeby,
  address as JBETHPaymentTerminalAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBETHPaymentTerminal.json';
import {
  abi as JBSingleTokenPaymentTerminalStoreABI_rinkeby,
  address as JBSingleTokenPaymentTerminalStoreAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBSingleTokenPaymentTerminalStore.json';
import {
  abi as JBControllerABI_rinkeby,
  address as JBControllerAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBController.json';
import {
  abi as JBFundingCycleStoreABI_rinkeby,
  address as JBFundingCycleStoreAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBFundingCycleStore.json';
import {
  abi as JBSplitsStoreABI_rinkeby,
  address as JBSplitsStoreAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBSplitsStore.json';
import {
  abi as JBCurrenciesABI_rinkeby,
  address as JBCurrenciesAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBCurrencies.json';
import {
  abi as JBOperatorStoreABI_rinkeby,
  address as JBOperatorStoreAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBOperatorStore.json';
import {
  abi as JBTokenStoreABI_rinkeby,
  address as JBTokenStoreAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBTokenStore.json';
import {
  abi as JBDirectoryABI_rinkeby,
  address as JBDirectoryAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBDirectory.json';
import {
  abi as JBPricesABI_rinkeby,
  address as JBPricesAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBPrices.json';
import {
  abi as JBETHERC20ProjectPayerDeployerABI_rinkeby,
  address as JBETHERC20ProjectPayerDeployerAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBETHERC20ProjectPayerDeployer.json';
import {
  abi as JBProjectsABI_rinkeby,
  address as JBProjectsAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBProjects.json';
import {
  abi as JBETHERC20SplitsPayerDeployerABI_rinkeby,
  address as JBETHERC20SplitsPayerDeployerAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JBETHERC20SplitsPayerDeployer.json';
import {
  abi as JB3DayReconfigurationBufferBallotABI_rinkeby,
  address as JB3DayReconfigurationBufferBallotAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JB3DayReconfigurationBufferBallot.json';
import {
  abi as JB7DayReconfigurationBufferBallotABI_rinkeby,
  address as JB7DayReconfigurationBufferBallotAddress_rinkeby,
} from '@jbx-protocol/contracts-v2/deployments/rinkeby/JB7DayReconfigurationBufferBallot.json';
import {
  JBETHPaymentTerminal,
  JBSingleTokenPaymentTerminalStore,
  JBController,
  JBFundingCycleStore,
  JBSplitsStore,
  JBCurrencies,
  JBOperatorStore,
  JBTokenStore,
  JBDirectory,
  JBPrices,
  JBETHERC20ProjectPayerDeployer,
  JBProjects,
  JBETHERC20SplitsPayerDeployer,
  JB3DayReconfigurationBufferBallot,
  JB7DayReconfigurationBufferBallot,
} from './types/contracts';
export {
  JBETHPaymentTerminal,
  JBSingleTokenPaymentTerminalStore,
  JBController,
  JBFundingCycleStore,
  JBSplitsStore,
  JBCurrencies,
  JBOperatorStore,
  JBTokenStore,
  JBDirectory,
  JBPrices,
  JBETHERC20ProjectPayerDeployer,
  JBProjects,
  JBETHERC20SplitsPayerDeployer,
  JB3DayReconfigurationBufferBallot,
  JB7DayReconfigurationBufferBallot,
} from './types/contracts';

type SignerOrProvider = Signer | Provider;
export const getJBETHPaymentTerminal = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBETHPaymentTerminalAddress_rinkeby
      : JBETHPaymentTerminalAddress_mainnet,
    network === 'rinkeby'
      ? JBETHPaymentTerminalABI_rinkeby
      : JBETHPaymentTerminalABI_mainnet,
    signerOrProvider,
  ) as JBETHPaymentTerminal;
export const getJBSingleTokenPaymentTerminalStore = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBSingleTokenPaymentTerminalStoreAddress_rinkeby
      : JBSingleTokenPaymentTerminalStoreAddress_mainnet,
    network === 'rinkeby'
      ? JBSingleTokenPaymentTerminalStoreABI_rinkeby
      : JBSingleTokenPaymentTerminalStoreABI_mainnet,
    signerOrProvider,
  ) as JBSingleTokenPaymentTerminalStore;
export const getJBController = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBControllerAddress_rinkeby
      : JBControllerAddress_mainnet,
    network === 'rinkeby' ? JBControllerABI_rinkeby : JBControllerABI_mainnet,
    signerOrProvider,
  ) as JBController;
export const getJBFundingCycleStore = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBFundingCycleStoreAddress_rinkeby
      : JBFundingCycleStoreAddress_mainnet,
    network === 'rinkeby'
      ? JBFundingCycleStoreABI_rinkeby
      : JBFundingCycleStoreABI_mainnet,
    signerOrProvider,
  ) as JBFundingCycleStore;
export const getJBSplitsStore = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBSplitsStoreAddress_rinkeby
      : JBSplitsStoreAddress_mainnet,
    network === 'rinkeby' ? JBSplitsStoreABI_rinkeby : JBSplitsStoreABI_mainnet,
    signerOrProvider,
  ) as JBSplitsStore;
export const getJBCurrencies = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBCurrenciesAddress_rinkeby
      : JBCurrenciesAddress_mainnet,
    network === 'rinkeby' ? JBCurrenciesABI_rinkeby : JBCurrenciesABI_mainnet,
    signerOrProvider,
  ) as JBCurrencies;
export const getJBOperatorStore = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBOperatorStoreAddress_rinkeby
      : JBOperatorStoreAddress_mainnet,
    network === 'rinkeby'
      ? JBOperatorStoreABI_rinkeby
      : JBOperatorStoreABI_mainnet,
    signerOrProvider,
  ) as JBOperatorStore;
export const getJBTokenStore = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBTokenStoreAddress_rinkeby
      : JBTokenStoreAddress_mainnet,
    network === 'rinkeby' ? JBTokenStoreABI_rinkeby : JBTokenStoreABI_mainnet,
    signerOrProvider,
  ) as JBTokenStore;
export const getJBDirectory = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBDirectoryAddress_rinkeby
      : JBDirectoryAddress_mainnet,
    network === 'rinkeby' ? JBDirectoryABI_rinkeby : JBDirectoryABI_mainnet,
    signerOrProvider,
  ) as JBDirectory;
export const getJBPrices = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby' ? JBPricesAddress_rinkeby : JBPricesAddress_mainnet,
    network === 'rinkeby' ? JBPricesABI_rinkeby : JBPricesABI_mainnet,
    signerOrProvider,
  ) as JBPrices;
export const getJBETHERC20ProjectPayerDeployer = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBETHERC20ProjectPayerDeployerAddress_rinkeby
      : JBETHERC20ProjectPayerDeployerAddress_mainnet,
    network === 'rinkeby'
      ? JBETHERC20ProjectPayerDeployerABI_rinkeby
      : JBETHERC20ProjectPayerDeployerABI_mainnet,
    signerOrProvider,
  ) as JBETHERC20ProjectPayerDeployer;
export const getJBProjects = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBProjectsAddress_rinkeby
      : JBProjectsAddress_mainnet,
    network === 'rinkeby' ? JBProjectsABI_rinkeby : JBProjectsABI_mainnet,
    signerOrProvider,
  ) as JBProjects;
export const getJBETHERC20SplitsPayerDeployer = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JBETHERC20SplitsPayerDeployerAddress_rinkeby
      : JBETHERC20SplitsPayerDeployerAddress_mainnet,
    network === 'rinkeby'
      ? JBETHERC20SplitsPayerDeployerABI_rinkeby
      : JBETHERC20SplitsPayerDeployerABI_mainnet,
    signerOrProvider,
  ) as JBETHERC20SplitsPayerDeployer;
export const getJB3DayReconfigurationBufferBallot = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JB3DayReconfigurationBufferBallotAddress_rinkeby
      : JB3DayReconfigurationBufferBallotAddress_mainnet,
    network === 'rinkeby'
      ? JB3DayReconfigurationBufferBallotABI_rinkeby
      : JB3DayReconfigurationBufferBallotABI_mainnet,
    signerOrProvider,
  ) as JB3DayReconfigurationBufferBallot;
export const getJB7DayReconfigurationBufferBallot = (
  signerOrProvider: SignerOrProvider,
  { network }: { network: 'mainnet' | 'rinkeby' } = { network: 'mainnet' },
) =>
  new Contract(
    network === 'rinkeby'
      ? JB7DayReconfigurationBufferBallotAddress_rinkeby
      : JB7DayReconfigurationBufferBallotAddress_mainnet,
    network === 'rinkeby'
      ? JB7DayReconfigurationBufferBallotABI_rinkeby
      : JB7DayReconfigurationBufferBallotABI_mainnet,
    signerOrProvider,
  ) as JB7DayReconfigurationBufferBallot;
