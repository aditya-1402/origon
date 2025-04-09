<script>
  import { fly } from "svelte/transition";
  import { twMerge } from "tailwind-merge";
  import { cubicInOut } from "svelte/easing";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, children, ...restProps } = $props();
</script>

<AlertDialogPrimitive.Content
  forceMount
  class={twMerge(
    "fixed left-[50%] top-[50%]",
    "z-[10006] w-full max-w-[480px] translate-x-[-50%] translate-y-[-50%]",
    "rounded-lg bg-clay-100 p-8 shadow-lg dark:bg-clay-300 text-clay-900",
    "transition-all duration-300 ease-in-out",
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
            easing: cubicInOut,
          }}
          {...props}
        >
          {@render children()}
        </div>
      </div>
    {/if}
  {/snippet}
</AlertDialogPrimitive.Content>
