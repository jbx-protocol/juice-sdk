/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface JBPricesInterface extends utils.Interface {
  functions: {
    "addFeedFor(uint256,uint256,address)": FunctionFragment;
    "feedFor(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "priceFor(uint256,uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addFeedFor"
      | "feedFor"
      | "owner"
      | "priceFor"
      | "renounceOwnership"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFeedFor",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedFor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceFor",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addFeedFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feedFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddFeed(uint256,uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddFeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AddFeedEventObject {
  currency: BigNumber;
  base: BigNumber;
  feed: string;
}
export type AddFeedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  AddFeedEventObject
>;

export type AddFeedEventFilter = TypedEventFilter<AddFeedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface JBPrices extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBPricesInterface;

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
    /**
     * Current feeds can't be modified.
     *  Add a price feed for a currency in terms of the provided base currency.
     * @param _base The base currency unit being priced by the feed.
     * @param _currency The currency units the feed's resulting price is in terms of.
     * @param _feed The price feed being added.
     */
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _feed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     *  The available price feeds.
     */
    feedFor(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Gets the number of `_currency` units that can be converted to 1 `_base` unit.
     * @param _base The base currency unit being priced.
     * @param _currency The currency units the resulting price is in terms of.
     * @param _decimals The number of decimals the returned fixed point price should include.
     */
    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Current feeds can't be modified.
   *  Add a price feed for a currency in terms of the provided base currency.
   * @param _base The base currency unit being priced by the feed.
   * @param _currency The currency units the feed's resulting price is in terms of.
   * @param _feed The price feed being added.
   */
  addFeedFor(
    _currency: BigNumberish,
    _base: BigNumberish,
    _feed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   *  The available price feeds.
   */
  feedFor(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets the number of `_currency` units that can be converted to 1 `_base` unit.
   * @param _base The base currency unit being priced.
   * @param _currency The currency units the resulting price is in terms of.
   * @param _decimals The number of decimals the returned fixed point price should include.
   */
  priceFor(
    _currency: BigNumberish,
    _base: BigNumberish,
    _decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Current feeds can't be modified.
     *  Add a price feed for a currency in terms of the provided base currency.
     * @param _base The base currency unit being priced by the feed.
     * @param _currency The currency units the feed's resulting price is in terms of.
     * @param _feed The price feed being added.
     */
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _feed: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     *  The available price feeds.
     */
    feedFor(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets the number of `_currency` units that can be converted to 1 `_base` unit.
     * @param _base The base currency unit being priced.
     * @param _currency The currency units the resulting price is in terms of.
     * @param _decimals The number of decimals the returned fixed point price should include.
     */
    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddFeed(uint256,uint256,address)"(
      currency?: BigNumberish | null,
      base?: BigNumberish | null,
      feed?: null
    ): AddFeedEventFilter;
    AddFeed(
      currency?: BigNumberish | null,
      base?: BigNumberish | null,
      feed?: null
    ): AddFeedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    /**
     * Current feeds can't be modified.
     *  Add a price feed for a currency in terms of the provided base currency.
     * @param _base The base currency unit being priced by the feed.
     * @param _currency The currency units the feed's resulting price is in terms of.
     * @param _feed The price feed being added.
     */
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _feed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     *  The available price feeds.
     */
    feedFor(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets the number of `_currency` units that can be converted to 1 `_base` unit.
     * @param _base The base currency unit being priced.
     * @param _currency The currency units the resulting price is in terms of.
     * @param _decimals The number of decimals the returned fixed point price should include.
     */
    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Current feeds can't be modified.
     *  Add a price feed for a currency in terms of the provided base currency.
     * @param _base The base currency unit being priced by the feed.
     * @param _currency The currency units the feed's resulting price is in terms of.
     * @param _feed The price feed being added.
     */
    addFeedFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _feed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     *  The available price feeds.
     */
    feedFor(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets the number of `_currency` units that can be converted to 1 `_base` unit.
     * @param _base The base currency unit being priced.
     * @param _currency The currency units the resulting price is in terms of.
     * @param _decimals The number of decimals the returned fixed point price should include.
     */
    priceFor(
      _currency: BigNumberish,
      _base: BigNumberish,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
