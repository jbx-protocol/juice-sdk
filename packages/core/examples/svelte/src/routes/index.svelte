<script>
	import { JsonRpcProvider } from '@ethersproject/providers';
	import { getJBDirectory, getJBSingleTokenPaymentTerminalStore } from 'juice-sdk';
	import { formatEther } from 'ethers/lib/utils';
	export const projectId = 2;
	export let balanceETH = 0;
	const RPC_HOST = 'https://mainnet.infura.io/v3/YOUR_INFURA_ID';
	const provider = new JsonRpcProvider(RPC_HOST);

	async function getBalance() {
		const terminals = await getJBDirectory(provider).terminalsOf(projectId);
		const primaryTerminal = terminals[0];

		const balance = await getJBSingleTokenPaymentTerminalStore(provider).balanceOf(
			primaryTerminal,
			projectId
		);

		balanceETH = formatEther(balance);
	}
    getBalance()
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Project {projectId} Juicebox balance: {balanceETH} ETH</p>
