# juice-sdk

🧃 A JavaScript SDK for the [Juicebox V2 protocol](https://github.com/jbx-protocol/juice-contracts-v2).

> ⚠️ This library is experimental and we provide no guarantees. Use at your own risk.

## Overview

`juice-sdk` aims to help you interact with the Juicebox V2 contracts easier using JavaScript.

## Installation

```bash
npm install juice-sdk
```

## Usage

1. Import the factory function for a Juicebox contract.

   ```js
   import { getJBDirectory } from "juice-sdk";
   ```

1. Create a JsonRpcProvider.
   The example below uses the [ethers](https://docs.ethers.io/v5/) library.

   ```js
   import { JsonRpcProvider } from "@ethersproject/providers";
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

### Examples

Inspect the `examples/` directory to learn how to use `juice-sdk` for your project.

#### Get balance for a Juicebox project

**Dependencies**:

- [ethers](https://docs.ethers.io/v5)

```typescript
import { JsonRpcProvider } from "@ethersproject/providers";
import {
  getJBDirectory,
  getJBSingleTokenPaymentTerminalStore,
} from "juice-sdk";

// 1. Create your JSON RPC provider with ethers.js
const RPC_HOST = "https://mainnet.infura.io/v3/YOUR_INFURA_ID";
const provider = new JsonRpcProvider(RPC_HOST);

async function getBalance(projectId: string) {
  // 2. Get a list of the project's terminals
  const terminals = await getJBDirectory(provider).terminalsOf(projectId);
  const primaryTerminal = terminals[0];

  // 3. Get the balance of the projects' primary terminal.
  const balance = await getJBSingleTokenPaymentTerminalStore(
    provider
  ).balanceOf(primaryTerminal, projectId);

  console.log(balance);
}

// get the current balance for Juicebox project 2
getBalance("2");
```
