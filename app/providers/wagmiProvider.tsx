'use client';

import { wagmiConfig } from '@/wagmi/wagmiConfig';
import { WagmiProvider as WAGMIPROVIDER } from 'wagmi';

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  return <WAGMIPROVIDER config={wagmiConfig}>{children}</WAGMIPROVIDER>;
}
