import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import {
  abi as JBETHPaymentTerminalABI,
  address as JBETHPaymentTerminalAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHPaymentTerminal.json";
import {
  abi as JBSingleTokenPaymentTerminalStoreABI,
  address as JBSingleTokenPaymentTerminalStoreAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBSingleTokenPaymentTerminalStore.json";
import {
  abi as JBControllerABI,
  address as JBControllerAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBController.json";
import {
  abi as JBFundingCycleStoreABI,
  address as JBFundingCycleStoreAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBFundingCycleStore.json";
import {
  abi as JBSplitsStoreABI,
  address as JBSplitsStoreAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBSplitsStore.json";
import {
  abi as JBCurrenciesABI,
  address as JBCurrenciesAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBCurrencies.json";
import {
  abi as JBOperatorStoreABI,
  address as JBOperatorStoreAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBOperatorStore.json";
import {
  abi as JBTokenStoreABI,
  address as JBTokenStoreAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBTokenStore.json";
import {
  abi as JBDirectoryABI,
  address as JBDirectoryAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBDirectory.json";
import {
  abi as JBPricesABI,
  address as JBPricesAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBPrices.json";
import {
  abi as JBETHERC20ProjectPayerDeployerABI,
  address as JBETHERC20ProjectPayerDeployerAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20ProjectPayerDeployer.json";
import {
  abi as JBProjectsABI,
  address as JBProjectsAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBProjects.json";
import {
  abi as JBETHERC20SplitsPayerDeployerABI,
  address as JBETHERC20SplitsPayerDeployerAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20SplitsPayerDeployer.json";
import {
  abi as JBReconfigurationBufferBallotABI,
  address as JBReconfigurationBufferBallotAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JBReconfigurationBufferBallot.json";
import {
  JBController,
  JBCurrencies,
  JBDirectory,
  JBETHERC20ProjectPayerDeployer,
  JBETHERC20SplitsPayerDeployer,
  JBFundingCycleStore,
  JBOperatorStore,
  JBPrices,
  JBProjects,
  JBReconfigurationBufferBallot,
  JBSingleTokenPaymentTerminalStore,
  JBSplitsStore,
  JBTokenStore,
} from "./types/contracts";

export const getJBETHPaymentTerminal = (provider: JsonRpcProvider) =>
  new Contract(JBETHPaymentTerminalAddress, JBETHPaymentTerminalABI, provider);
export const getJBSingleTokenPaymentTerminalStore = (
  provider: JsonRpcProvider
) =>
  new Contract(
    JBSingleTokenPaymentTerminalStoreAddress,
    JBSingleTokenPaymentTerminalStoreABI,
    provider
  ) as JBSingleTokenPaymentTerminalStore;
export const getJBController = (provider: JsonRpcProvider) =>
  new Contract(JBControllerAddress, JBControllerABI, provider) as JBController;
export const getJBFundingCycleStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBFundingCycleStoreAddress,
    JBFundingCycleStoreABI,
    provider
  ) as JBFundingCycleStore;
export const getJBSplitsStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBSplitsStoreAddress,
    JBSplitsStoreABI,
    provider
  ) as JBSplitsStore;
export const getJBCurrencies = (provider: JsonRpcProvider) =>
  new Contract(JBCurrenciesAddress, JBCurrenciesABI, provider) as JBCurrencies;
export const getJBOperatorStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBOperatorStoreAddress,
    JBOperatorStoreABI,
    provider
  ) as JBOperatorStore;
export const getJBTokenStore = (provider: JsonRpcProvider) =>
  new Contract(JBTokenStoreAddress, JBTokenStoreABI, provider) as JBTokenStore;
export const getJBDirectory = (provider: JsonRpcProvider) =>
  new Contract(JBDirectoryAddress, JBDirectoryABI, provider) as JBDirectory;
export const getJBPrices = (provider: JsonRpcProvider) =>
  new Contract(JBPricesAddress, JBPricesABI, provider) as JBPrices;
export const getJBETHERC20ProjectPayerDeployer = (provider: JsonRpcProvider) =>
  new Contract(
    JBETHERC20ProjectPayerDeployerAddress,
    JBETHERC20ProjectPayerDeployerABI,
    provider
  ) as JBETHERC20ProjectPayerDeployer;
export const getJBProjects = (provider: JsonRpcProvider) =>
  new Contract(JBProjectsAddress, JBProjectsABI, provider) as JBProjects;
export const getJBETHERC20SplitsPayerDeployer = (provider: JsonRpcProvider) =>
  new Contract(
    JBETHERC20SplitsPayerDeployerAddress,
    JBETHERC20SplitsPayerDeployerABI,
    provider
  ) as JBETHERC20SplitsPayerDeployer;
export const getJBReconfigurationBufferBallot = (provider: JsonRpcProvider) =>
  new Contract(
    JBReconfigurationBufferBallotAddress,
    JBReconfigurationBufferBallotABI,
    provider
  ) as JBReconfigurationBufferBallot;
