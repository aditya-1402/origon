<script>
  import { fade } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { Dialog as DialogPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<DialogPrimitive.Overlay
  forceMount
  class={twMerge(
    'fixed inset-0 z-[10005] bg-black/50',
    'transition-all duration-300 ease-in-out',
    className
  )}
  {...restProps}
>
  {#snippet child({ props, open })}
    {#if open}
      <div transition:fade={{ duration: 200 }} {...props}></div>
    {/if}
  {/snippet}
</DialogPrimitive.Overlay>
