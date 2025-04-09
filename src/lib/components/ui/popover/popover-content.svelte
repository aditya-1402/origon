<script>
  import { fly } from "svelte/transition";
  import { twMerge } from "tailwind-merge";
  import { Popover as PopoverPrimitive } from "bits-ui";

  let { className, children, ...restProps } = $props();
</script>

<PopoverPrimitive.Content forceMount {...restProps}>
  {#snippet child({ wrapperProps, props, open })}
    {#if open}
      <div {...wrapperProps}>
        <div
          class={twMerge(
            "w-[300px] z-drawer",
            "flex flex-col gap-4",
            "rounded-lg p-8 shadow-xl",
            "bg-white dark:bg-clay-300",
            "border border-black/10 dark:border-white/10",
            className
          )}
          transition:fly={{ duration: 400, y: 10, opacity: 0 }}
          {...props}
        >
          {@render children()}
        </div>
      </div>
    {/if}
  {/snippet}
</PopoverPrimitive.Content>
