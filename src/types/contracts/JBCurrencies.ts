/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface JBCurrenciesInterface extends utils.Interface {
  functions: {
    "ETH()": FunctionFragment;
    "USD()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "ETH" | "USD"): FunctionFragment;

  encodeFunctionData(functionFragment: "ETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "USD", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USD", data: BytesLike): Result;

  events: {};
}

export interface JBCurrencies extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBCurrenciesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    USD(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ETH(overrides?: CallOverrides): Promise<BigNumber>;

  USD(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    USD(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    USD(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
