import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import JBETHPaymentTerminalContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHPaymentTerminal.json";
import JBSingleTokenPaymentTerminalStoreContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBSingleTokenPaymentTerminalStore.json";
import JBControllerContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBController.json";
import JBFundingCycleStoreContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBFundingCycleStore.json";
import JBSplitsStoreContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBSplitsStore.json";
import JBCurrenciesContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBCurrencies.json";
import JBOperatorStoreContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBOperatorStore.json";
import JBTokenStoreContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBTokenStore.json";
import JBDirectoryContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBDirectory.json";
import JBPricesContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBPrices.json";
import JBETHERC20ProjectPayerDeployerContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20ProjectPayerDeployer.json";
import JBProjectsContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBProjects.json";
import JBETHERC20SplitsPayerDeployerContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBETHERC20SplitsPayerDeployer.json";
import JBReconfigurationBufferBallotContract from "@jbx-protocol/contracts-v2/deployments/mainnet/JBReconfigurationBufferBallot.json";
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
  new Contract(
    JBETHPaymentTerminalContract.address,
    JBETHPaymentTerminalContract.abi,
    provider
  );
export const getJBSingleTokenPaymentTerminalStore = (
  provider: JsonRpcProvider
) =>
  new Contract(
    JBSingleTokenPaymentTerminalStoreContract.address,
    JBSingleTokenPaymentTerminalStoreContract.abi,
    provider
  ) as JBSingleTokenPaymentTerminalStore;
export const getJBController = (provider: JsonRpcProvider) =>
  new Contract(
    JBControllerContract.address,
    JBControllerContract.abi,
    provider
  ) as JBController;
export const getJBFundingCycleStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBFundingCycleStoreContract.address,
    JBFundingCycleStoreContract.abi,
    provider
  ) as JBFundingCycleStore;
export const getJBSplitsStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBSplitsStoreContract.address,
    JBSplitsStoreContract.abi,
    provider
  ) as JBSplitsStore;
export const getJBCurrencies = (provider: JsonRpcProvider) =>
  new Contract(
    JBCurrenciesContract.address,
    JBCurrenciesContract.abi,
    provider
  ) as JBCurrencies;
export const getJBOperatorStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBOperatorStoreContract.address,
    JBOperatorStoreContract.abi,
    provider
  ) as JBOperatorStore;
export const getJBTokenStore = (provider: JsonRpcProvider) =>
  new Contract(
    JBTokenStoreContract.address,
    JBTokenStoreContract.abi,
    provider
  ) as JBTokenStore;
export const getJBDirectory = (provider: JsonRpcProvider) =>
  new Contract(
    JBDirectoryContract.address,
    JBDirectoryContract.abi,
    provider
  ) as JBDirectory;
export const getJBPrices = (provider: JsonRpcProvider) =>
  new Contract(
    JBPricesContract.address,
    JBPricesContract.abi,
    provider
  ) as JBPrices;
export const getJBETHERC20ProjectPayerDeployer = (provider: JsonRpcProvider) =>
  new Contract(
    JBETHERC20ProjectPayerDeployerContract.address,
    JBETHERC20ProjectPayerDeployerContract.abi,
    provider
  ) as JBETHERC20ProjectPayerDeployer;
export const getJBProjects = (provider: JsonRpcProvider) =>
  new Contract(
    JBProjectsContract.address,
    JBProjectsContract.abi,
    provider
  ) as JBProjects;
export const getJBETHERC20SplitsPayerDeployer = (provider: JsonRpcProvider) =>
  new Contract(
    JBETHERC20SplitsPayerDeployerContract.address,
    JBETHERC20SplitsPayerDeployerContract.abi,
    provider
  ) as JBETHERC20SplitsPayerDeployer;
export const getJBReconfigurationBufferBallot = (provider: JsonRpcProvider) =>
  new Contract(
    JBReconfigurationBufferBallotContract.address,
    JBReconfigurationBufferBallotContract.abi,
    provider
  ) as JBReconfigurationBufferBallot;
