<script>
  import queryClient from '@graphql/queryClient';
  import {
    QueryClient as SvelteQueryClient,
    QueryClientProvider as SvelteQueryClientProvider
  } from '@tanstack/svelte-query';

  // STATES & PROPS
  let { children } = $props();
</script>

<SvelteQueryClientProvider client={queryClient}>{@render children()}</SvelteQueryClientProvider>
