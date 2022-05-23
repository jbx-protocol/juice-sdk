<script>
import {
  getJBSingleTokenPaymentTerminalStore,
  getJBDirectory,
} from "juice-sdk";
import { formatEther } from "ethers/lib/utils";
import { JsonRpcProvider } from "@ethersproject/providers";

const RPC_HOST = "https://mainnet.infura.io/v3/YOUR_INFURA_ID";
const provider = new JsonRpcProvider(RPC_HOST);

const PROJECT_ID = 2;

export default {
  name: "HelloWorld",
  data() {
    return {
      balance: undefined,
    };
  },
  methods: {
    async getJuiceboxBalance(projectId) {
      // 2. Get a list of the project's terminals
      const terminals = await getJBDirectory(provider).terminalsOf(projectId);
      const primaryTerminal = terminals[0];
      console.log(primaryTerminal);
      // 3. Get the balance of the projects' primary terminal.
      const balance = await getJBSingleTokenPaymentTerminalStore(
        provider
      ).balanceOf(primaryTerminal, projectId);

      this.balance = formatEther(balance);
    },
  },
  mounted() {
    this.getJuiceboxBalance(PROJECT_ID);
  },
  PROJECT_ID,
};
</script>

<template>
  <div class="hello">
    <p>Project {{ $options.PROJECT_ID }} Juicebox balance: {{ balance }} ETH</p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
