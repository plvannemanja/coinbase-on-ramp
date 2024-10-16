'use client';

import { CoinbaseRampTransactionProvider } from '../contexts/CoinbaseRampTransactionContext';
import { NextUiProvider } from './nextuiProvider';
import { OnchainProvider } from './onchainProvider';
import { QueryClientProvider } from './queryClientProvider';
import { WagmiProvider } from './wagmiProvider';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUiProvider>
      <WagmiProvider>
        <QueryClientProvider>
          <OnchainProvider>
            <CoinbaseRampTransactionProvider>
              {children}
            </CoinbaseRampTransactionProvider>
          </OnchainProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextUiProvider>
  );
}
