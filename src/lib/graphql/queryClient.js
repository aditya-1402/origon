import { QueryClient } from '@tanstack/query-core';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

export default queryClient;
