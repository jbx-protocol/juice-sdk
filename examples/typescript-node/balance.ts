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
