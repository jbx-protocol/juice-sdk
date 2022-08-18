# juice-sdk

🧃 A JavaScript SDK for the
[Juicebox V2 protocol](https://github.com/jbx-protocol/juice-contracts-v2).

> ⚠️ This library is experimental and we provide no guarantees. Use at your own
> risk.

## Overview

`juice-sdk` helps you interact with the Juicebox V2 contracts using JavaScript.

Supports your favorite dev environment:

- ✅ Node.js
- ✅ Typescript
- ✅ Webpack (supports tree-shaking)
- ✅ Rollup (supports tree-shaking)
- ✅ Vite (supports tree-shaking)

Check out the [examples](#examples) to get started 🚀.

## Installation

```bash
npm install juice-sdk
```

## Usage

1. Import the factory function for a Juicebox contract.

   ```js
   import { getJBDirectory } from 'juice-sdk';
   ```

1. Create a JsonRpcProvider. The example below uses the
   [ethers](https://docs.ethers.io/v5/) library.

   ```js
   import { JsonRpcProvider } from '@ethersproject/providers';
   // ...);
   const provider = new JsonRpcProvider(YOUR_GATEWAY_HOST_URL);
   ```

1. Call the factory function to get an instance of the ethers.js `Contract`.

   ```js
   const JBDirectory = getJBDirectory(provider);
   ```

1. Start interacting with the contract.

   ```js
   const const terminals = await JBDirectory.terminalsOf(projectId);
   ```

### Usage on Rinkeby

Juicebox is deployed on Ethererum mainnet and the Rinkeby testnet. To use the
Rinkeby contract addresses, set the `network` argument to `rinkeby` when loading
the given contract:

```js
const JBDirectory = getJBDirectory(provider, { network: 'rinkeby' });
```

### Examples

Inspect the `examples/` directory to learn how to use `juice-sdk` for your
project.

| Environment                    | Example                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| node.js                        | [./examples/node](./examples/node)                                                                               |
| node.js with Typescript        | [./examples/typescript-node](./examples/typescript-node)                                                         |
| create-react-app (webpack)     | [./examples/create-react-app](./examples/create-react-app)                                                       |
| Vue                            | [./examples/vue](./examples/vue)                                                                                 |
| Svelte                         | [./examples/svelte](./examples/svelte)                                                                           |
| Vanilla JavaScript (with Vite) | [juice-tools/embed/project/balance](https://github.com/jbx-protocol/juice-tools/tree/main/embed/project/balance) |

## Development

- [Build process](./doc/build-process.md)
