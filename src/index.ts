import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";

type SignerOrProvider = Signer | Provider;

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
  abi as JB3DayReconfigurationBufferBallotABI,
  address as JB3DayReconfigurationBufferBallotAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JB3DayReconfigurationBufferBallot.json";
import {
  abi as JB7DayReconfigurationBufferBallotABI,
  address as JB7DayReconfigurationBufferBallotAddress,
} from "@jbx-protocol/contracts-v2/deployments/mainnet/JB7DayReconfigurationBufferBallot.json";
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
  JB3DayReconfigurationBufferBallot,
  JB7DayReconfigurationBufferBallot,
  JBSingleTokenPaymentTerminalStore,
  JBSplitsStore,
  JBTokenStore,
} from "./types/contracts";

export const getJBETHPaymentTerminal = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBETHPaymentTerminalAddress,
    JBETHPaymentTerminalABI,
    signerOrProvider
  );
export const getJBSingleTokenPaymentTerminalStore = (
  signerOrProvider: SignerOrProvider
) =>
  new Contract(
    JBSingleTokenPaymentTerminalStoreAddress,
    JBSingleTokenPaymentTerminalStoreABI,
    signerOrProvider
  ) as JBSingleTokenPaymentTerminalStore;
export const getJBController = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBControllerAddress,
    JBControllerABI,
    signerOrProvider
  ) as JBController;
export const getJBFundingCycleStore = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBFundingCycleStoreAddress,
    JBFundingCycleStoreABI,
    signerOrProvider
  ) as JBFundingCycleStore;
export const getJBSplitsStore = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBSplitsStoreAddress,
    JBSplitsStoreABI,
    signerOrProvider
  ) as JBSplitsStore;
export const getJBCurrencies = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBCurrenciesAddress,
    JBCurrenciesABI,
    signerOrProvider
  ) as JBCurrencies;
export const getJBOperatorStore = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBOperatorStoreAddress,
    JBOperatorStoreABI,
    signerOrProvider
  ) as JBOperatorStore;
export const getJBTokenStore = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBTokenStoreAddress,
    JBTokenStoreABI,
    signerOrProvider
  ) as JBTokenStore;
export const getJBDirectory = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBDirectoryAddress,
    JBDirectoryABI,
    signerOrProvider
  ) as JBDirectory;
export const getJBPrices = (signerOrProvider: SignerOrProvider) =>
  new Contract(JBPricesAddress, JBPricesABI, signerOrProvider) as JBPrices;
export const getJBETHERC20ProjectPayerDeployer = (
  signerOrProvider: SignerOrProvider
) =>
  new Contract(
    JBETHERC20ProjectPayerDeployerAddress,
    JBETHERC20ProjectPayerDeployerABI,
    signerOrProvider
  ) as JBETHERC20ProjectPayerDeployer;
export const getJBProjects = (signerOrProvider: SignerOrProvider) =>
  new Contract(
    JBProjectsAddress,
    JBProjectsABI,
    signerOrProvider
  ) as JBProjects;
export const getJBETHERC20SplitsPayerDeployer = (
  signerOrProvider: SignerOrProvider
) =>
  new Contract(
    JBETHERC20SplitsPayerDeployerAddress,
    JBETHERC20SplitsPayerDeployerABI,
    signerOrProvider
  ) as JBETHERC20SplitsPayerDeployer;
export const getJB3DayReconfigurationBufferBallot = (
  signerOrProvider: SignerOrProvider
) =>
  new Contract(
    JB3DayReconfigurationBufferBallotAddress,
    JB3DayReconfigurationBufferBallotABI,
    signerOrProvider
  ) as JB3DayReconfigurationBufferBallot;
export const getJB7DayReconfigurationBufferBallot = (
  signerOrProvider: SignerOrProvider
) =>
  new Contract(
    JB7DayReconfigurationBufferBallotAddress,
    JB7DayReconfigurationBufferBallotABI,
    signerOrProvider
  ) as JB7DayReconfigurationBufferBallot;
