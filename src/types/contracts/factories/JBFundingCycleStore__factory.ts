/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBFundingCycleStore,
  JBFundingCycleStoreInterface,
} from "../JBFundingCycleStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IJBDirectory",
        name: "_directory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CONTROLLER_UNAUTHORIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_BALLOT",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_DISCOUNT_RATE",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_DURATION",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_WEIGHT",
    type: "error",
  },
  {
    inputs: [],
    name: "NO_SAME_BLOCK_RECONFIGURATION",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivOverflow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct JBFundingCycleData",
        name: "data",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "metadata",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mustStartAtOrAfter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Configure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "basedOn",
        type: "uint256",
      },
    ],
    name: "Init",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
        ],
        internalType: "struct JBFundingCycleData",
        name: "_data",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_metadata",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mustStartAtOrAfter",
        type: "uint256",
      },
    ],
    name: "configureFor",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "configuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basedOn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metadata",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundingCycle",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "currentBallotStateOf",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "currentOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "configuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basedOn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metadata",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundingCycle",
        name: "fundingCycle",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "directory",
    outputs: [
      {
        internalType: "contract IJBDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_configuration",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "configuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basedOn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metadata",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundingCycle",
        name: "fundingCycle",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "latestConfigurationOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "latestConfiguredOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "configuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basedOn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metadata",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundingCycle",
        name: "fundingCycle",
        type: "tuple",
      },
      {
        internalType: "enum JBBallotState",
        name: "ballotState",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "queuedOf",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "configuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basedOn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discountRate",
            type: "uint256",
          },
          {
            internalType: "contract IJBFundingCycleBallot",
            name: "ballot",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "metadata",
            type: "uint256",
          },
        ],
        internalType: "struct JBFundingCycle",
        name: "fundingCycle",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611b41380380611b4183398101604081905261002f91610044565b60601b6001600160601b031916608052610074565b60006020828403121561005657600080fd5b81516001600160a01b038116811461006d57600080fd5b9392505050565b60805160601c611aa86100996000396000818161011e01526105e40152611aa86000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a249d4251161005b578063a249d42514610106578063c41c2f2414610119578063c55f571c14610165578063ebc8ca1f1461018557600080fd5b80632cee6deb1461008d57806343a266c2146100c05780635c550078146100e0578063669e48aa146100f3575b600080fd5b6100ad61009b3660046116c6565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b6100d36100ce3660046116c6565b6101a6565b6040516100b7919061182e565b6100d36100ee3660046116c6565b61035b565b6100d361010136600461175d565b6104c8565b6100d36101143660046116f8565b610537565b6101407f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b6101786101733660046116c6565b610a83565b6040516100b791906117ba565b6101986101933660046116c6565b610ab7565b6040516100b79291906118a8565b61020b60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008281526003602052604090205461022f57610229600080610b57565b92915050565b600061023a83610c8c565b90506102a160405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b81156102d5576102b18483610b57565b90506102bd8482610d45565b156102c9579392505050565b80604001519150610318565b60008481526003602052604090205491506102f08483610b57565b90506102fc8482610d45565b158061030b5750806060015142105b1561031857806040015191505b8161033057610328600080610b57565b949350505050565b61033a8483610b57565b9050806080015160001415610350579392505050565b610328816001610d7a565b6103c060405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000828152600360205260409020546103de57610229600080610b57565b60006103e983610eb2565b90508015610427576103fb8382610b57565b91506104078383610d45565b156104125750919050565b610420838360400151610b57565b9150610460565b600083815260036020526040902054610441908490610b57565b915042826060015111156104605761045d838360400151610b57565b91505b608082015161047b57610474600080610b57565b9392505050565b6104858383610d45565b1561049557610474826000610d7a565b6104a3838360400151610b57565b91508160800151600014156104bd57610474600080610b57565b610474826000610d7a565b61052d60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6104748383610b57565b61059c60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6040517f5dd8f6aa000000000000000000000000000000000000000000000000000000008152600481018690528590339073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635dd8f6aa9060240160206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065e9190611649565b73ffffffffffffffffffffffffffffffffffffffff16146106ab576040517fab7f741400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b67ffffffffffffffff853511156106ee576040517f3147256c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b633b9aca0085604001351115610730576040517f2459513500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6affffffffffffffffffffff60208601351115610779576040517f698f22ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061078b6080870160608801611688565b73ffffffffffffffffffffffffffffffffffffffff161461094f5760006107b86080870160608801611688565b9050803b63ffffffff81166107f9576040517f5401398100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108096080880160608901611688565b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f7ba3dfb300000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff91909116906301ffc9a79060240160206040518083038186803b15801561089057600080fd5b505afa9250505080156108de575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526108db91810190611666565b60015b610914576040517f5401398100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061094b576040517f5401398100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b4261096d878260208901358188116109675742610f40565b87610f40565b600061097f6080880160608901611688565b73ffffffffffffffffffffffffffffffffffffffff161415806109a25750853515155b806109b1575060008660400135115b15610a0c5760006109c86080880160608901611688565b6000898152602081815260408083208684529091529081902073ffffffffffffffffffffffffffffffffffffffff92909216893560a01b179089013560e01b179055505b8415610a2f57600087815260026020908152604080832084845290915290208590555b86817f1175572e9e7787125bbb2c1175e626d6fa90191342319fa2c35d8bd194a8a1b688888833604051610a6694939291906117c8565b60405180910390a3610a788782610b57565b979650505050505050565b60008181526003602052604081205481610a9d8483610b57565b9050610328848260200151836060015184604001516110eb565b610b1c60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600082815260036020526040812054610b358482610b57565b9250610b4f848460200151856060015186604001516110eb565b915050915091565b610bbc60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b81610bc657610229565b602081810183905260008481526001825260408082208583528352808220546affffffffffffffffffffff811660a080870191909152605882901c66ffffffffffffff90811684880152609083901c16606087015260c89190911c855286835282845281832086845284528183205473ffffffffffffffffffffffffffffffffffffffff811660e0808801919091529181901c67ffffffffffffffff166080870152901c60c0850152948152600282528481209381529290529190205461010082015290565b60008181526003602052604081205490610ca68383610b57565b905060008160800151118015610ccf575080608001518160600151610ccb9190611930565b4210155b15610cdd5750600092915050565b80606001514210610cf2576020015192915050565b6000610d02848360400151610b57565b905060008160800151118015610d2b575080608001518160600151610d279190611930565b4210155b15610d3a575060009392505050565b506040015192915050565b60006001610d61848460200151856060015186604001516110eb565b6002811115610d7257610d72611a1e565b149392505050565b610ddf60405180610120016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b60008215610e06576080840151610df6904261195c565b610e01906001611930565b610e11565b610e11426001611930565b90506000610e1f8583611289565b90506000610e2d8683611316565b9050604051806101200160405280828152602001876020015181526020018760400151815260200183815260200187608001518152602001610e6f8885611369565b81526020018760c0015181526020018760e0015173ffffffffffffffffffffffffffffffffffffffff168152602001876101000151815250935050505092915050565b60008181526003602052604081205490610ecc8383610b57565b905080606001514210610ee25750600092915050565b805160011415610ef25750919050565b6000610f02848360400151610b57565b905060008160800151118015610f2a575080608001518260600151610f27919061195c565b42105b15610f39575060009392505050565b5050919050565b600084815260036020526040902054610f6f57610f6a84610f62600080610b57565b858486611424565b6110e5565b6000610f7a85610c8c565b905080610f9257506000848152600360205260409020545b6000610f9e8683610b57565b9050610faa8682610d45565b1580610fb95750806060015142105b15610fcf57610fcc868260400151610b57565b90505b848160200151141561100d576040517f42bb50ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e081015160009073ffffffffffffffffffffffffffffffffffffffff16156110c1578160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b15801561107a57600080fd5b505afa15801561108e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b291906116df565b6110bc9087611930565b6110c4565b60005b90506110e18783888785116110d957876110db565b845b89611424565b5050505b50505050565b6000816110fa57506001610328565b60006111068684610b57565b60e081015190915073ffffffffffffffffffffffffffffffffffffffff16611132576001915050610328565b61113c854261195c565b8160e0015173ffffffffffffffffffffffffffffffffffffffff16630fb5a6b46040518163ffffffff1660e01b815260040160206040518083038186803b15801561118657600080fd5b505afa15801561119a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111be91906116df565b106111cd576000915050610328565b60e08101516040517f7416790700000000000000000000000000000000000000000000000000000000815260048101889052602481018790526044810186905273ffffffffffffffffffffffffffffffffffffffff9091169063741679079060640160206040518083038186803b15801561124757600080fd5b505afa15801561125b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127f91906116a5565b9695505050505050565b600082608001516000141561129f575080610229565b6000836080015184606001516112b59190611930565b90508281106112c5579050610229565b60808401516000906112d7838661195c565b6112e191906119ac565b90506112ed818561195c565b92505b8284111561130e5760808501516113079084611930565b92506112f0565b505092915050565b6000826080015160001415611339578251611332906001611930565b9050610229565b600083606001518361134b919061195c565b905083608001518161135d9190611948565b84516103289190611930565b600082608001516000141561139e576113328360a001518460c00151633b9aca00611394919061195c565b633b9aca00611541565b5060a082015160c08301516113b257610229565b60008360600151836113c4919061195c565b905060008460800151826113d89190611948565b905060005b8181101561141b576113fd848760c00151633b9aca00611394919061195c565b9350836114095761141b565b8061141381611973565b9150506113dd565b50505092915050565b835161147a5760208085015160008781526001808452604080832088845290945292902060589190911b8317609085901b17790100000000000000000000000000000000000000000000000000179055506114f7565b60006114868584611289565b90506000821161149f5761149a8582611369565b6114b0565b816001146114ad57816114b0565b60005b915060006114be8683611316565b60208088015160008a81526001835260408082208a83529093529190912060589190911b8517609085901b1760c883901b179055905050505b60008581526003602090815260408083208690559086015190519091879186917ff1bd4f3fcb4e0b193abc7e4002c0284e25086269a02de2e4c52045a91f64703791a45050505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000141561159a57838281611590576115906119ef565b0492505050610474565b8381106115e1576040517f773cc18c000000000000000000000000000000000000000000000000000000008152600481018290526024810185905260440160405180910390fd5b600084868809600260036001881981018916988990049182028318808302840302808302840302808302840302808302840302808302840302918202909203026000889003889004909101858311909403939093029303949094049190911702949350505050565b60006020828403121561165b57600080fd5b815161047481611a4d565b60006020828403121561167857600080fd5b8151801515811461047457600080fd5b60006020828403121561169a57600080fd5b813561047481611a4d565b6000602082840312156116b757600080fd5b81516003811061047457600080fd5b6000602082840312156116d857600080fd5b5035919050565b6000602082840312156116f157600080fd5b5051919050565b60008060008084860360e081121561170f57600080fd5b8535945060807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08201121561174357600080fd5b50929560208501955060a08501359460c001359350915050565b6000806040838503121561177057600080fd5b50508035926020909101359150565b600381106117b6577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b60208101610229828461177f565b84358152602080860135908201526040808601359082015260e0810160608601356117f281611a4d565b73ffffffffffffffffffffffffffffffffffffffff80821660608501528660808501528560a085015280851660c0850152505095945050505050565b61012081016102298284805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b61014081016119228285805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015273ffffffffffffffffffffffffffffffffffffffff60e08201511660e08301526101008082015181840152505050565b61047461012083018461177f565b60008219821115611943576119436119c0565b500190565b600082611957576119576119ef565b500490565b60008282101561196e5761196e6119c0565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119a5576119a56119c0565b5060010190565b6000826119bb576119bb6119ef565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611a6f57600080fd5b5056fea2646970667358221220f604bc368a7f130d77eb20d2590a88840a41ba1ec4c4d49a757fafa90909a45764736f6c63430008060033";

type JBFundingCycleStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBFundingCycleStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBFundingCycleStore__factory extends ContractFactory {
  constructor(...args: JBFundingCycleStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBFundingCycleStore> {
    return super.deploy(
      _directory,
      overrides || {}
    ) as Promise<JBFundingCycleStore>;
  }
  override getDeployTransaction(
    _directory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_directory, overrides || {});
  }
  override attach(address: string): JBFundingCycleStore {
    return super.attach(address) as JBFundingCycleStore;
  }
  override connect(signer: Signer): JBFundingCycleStore__factory {
    return super.connect(signer) as JBFundingCycleStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBFundingCycleStoreInterface {
    return new utils.Interface(_abi) as JBFundingCycleStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBFundingCycleStore {
    return new Contract(address, _abi, signerOrProvider) as JBFundingCycleStore;
  }
}
