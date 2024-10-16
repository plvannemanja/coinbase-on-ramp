import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, base, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import packageJson from '../package.json';

const { name } = packageJson;

export const wagmiConfig = createConfig({
  chains: [
    mainnet,
    sepolia,
    base,
    baseSepolia,
    // add supported chains here
  ],
  multiInjectedProviderDiscovery: false,
  connectors: [
    coinbaseWallet({
      appName: name,
      preference: 'all', // set this to `all` to use EOAs as well
      version: '4',
    }),
    // Add custom connectors here
  ],
  ssr: true,
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    // Add supported chain transporters here
  },
});
