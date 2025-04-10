<script>
  import { fly } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { cubicInOut } from 'svelte/easing';
  import { Dialog as DialogPrimitive } from 'bits-ui';

  let { className, children, ...restProps } = $props();
</script>

<DialogPrimitive.Content
  forceMount
  class={twMerge(
    'fixed top-[50%] left-[50%]',
    'z-[10006] w-full max-w-[480px] translate-x-[-50%] translate-y-[-50%]',
    'bg-card text-foreground rounded-lg p-8 shadow-lg',
    'transition-all duration-300 ease-in-out',
    className
  )}
  {...restProps}
>
  {#snippet child({ wrapperProps, props, open })}
    {#if open}
      <div {...wrapperProps}>
        <div
          transition:fly={{
            duration: 200,
            y: 20,
            opacity: 0,
            easing: cubicInOut
          }}
          {...props}
        >
          {@render children()}
        </div>
      </div>
    {/if}
  {/snippet}
</DialogPrimitive.Content>
