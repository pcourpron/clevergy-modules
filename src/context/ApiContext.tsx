import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, FC } from "react";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000_000, retry: false, refetchOnMount: false },
  },
});

export const ApiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
