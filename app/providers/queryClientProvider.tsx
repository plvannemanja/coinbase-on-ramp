import {
  QueryClient,
  QueryClientProvider as QUERYClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QUERYClientProvider client={queryClient}>{children}</QUERYClientProvider>
  );
}
