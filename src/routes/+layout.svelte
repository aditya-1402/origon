<script>
  import {
    QueryClient as SvelteQueryClient,
    QueryClientProvider as SvelteQueryClientProvider
  } from '@tanstack/svelte-query';
  import queryClient from '@graphql/queryClient';
  import Header from '@components/shared/Header.svelte';

  // STATES & PROPS
  let { children } = $props();
</script>

<SvelteQueryClientProvider client={queryClient}>
  <Header />
  {@render children()}
</SvelteQueryClientProvider>
