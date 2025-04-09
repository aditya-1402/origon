<script>
  import { twMerge } from "tailwind-merge";
  import { scale } from "svelte/transition";
  import { Tooltip as TooltipPrimitive } from "bits-ui";

  let { className, children, ...restProps } = $props();
</script>

<TooltipPrimitive.Content
  forceMount
  class={twMerge(
    "text-xs",
    "px-3 py-2",
    "rounded-md",
    "text-clay-900",
    "border border-clay-500/45",
    "bg-clay-100 dark:bg-clay-400",
    className
  )}
  side="bottom"
  sideOffset={8}
  {...restProps}
>
  {#snippet child({ wrapperProps, props, open })}
    {#if open}
      <div {...wrapperProps}>
        <div
          in:scale={{ duration: 200, start: 0.95 }}
          out:scale={{ duration: 100, start: 0.95 }}
          {...props}
        >
          {@render children()}
        </div>
      </div>
    {/if}
  {/snippet}
</TooltipPrimitive.Content>
