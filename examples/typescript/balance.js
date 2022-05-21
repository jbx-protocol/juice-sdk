var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JsonRpcProvider } from "@ethersproject/providers";
import juicebox from "juice-sdk";
// 1. Create your JSON RPC provider with ethers.js
const RPC_HOST = "https://mainnet.infura.io/v3/YOUR_INFURA_ID";
const provider = new JsonRpcProvider(RPC_HOST);
function getBalance(projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        // 2. Get a list of the project's terminals
        const terminals = yield juicebox.getJBDirectory(provider).terminalsOf(projectId);
        const primaryTerminal = terminals[0];
        // 3. Get the balance of the projects' primary terminal.
        const balance = yield juicebox.getJBSingleTokenPaymentTerminalStore(provider).balanceOf(primaryTerminal, projectId);
        console.log(balance);
    });
}
// get the current balance for Juicebox project 2
getBalance("2");
