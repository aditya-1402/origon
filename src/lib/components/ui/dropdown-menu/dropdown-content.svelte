<script>
  import { twMerge } from "tailwind-merge";
  import { scale } from "svelte/transition";
  import { quartInOut } from "svelte/easing";
  import { DropdownMenu as DropdownPrimitive } from "bits-ui";

  let { className, children, ...restProps } = $props();
</script>

<DropdownPrimitive.Content
  forceMount
  loop={true}
  class={twMerge(
    "py-2",
    "w-48 z-50",
    "outline-none",
    "rounded-lg shadow-lg",
    "bg-clay-150 dark:bg-clay-300",
    "border border-black/10 dark:border-white/10",
    className
  )}
  {...restProps}
>
  {#snippet child({ wrapperProps, props, open })}
    {#if open}
      <div {...wrapperProps}>
        <div
          transition:scale={{
            duration: 200,
            start: 0.9,
            easing: quartInOut,
          }}
          {...props}
        >
          {@render children()}
        </div>
      </div>
    {/if}
  {/snippet}
</DropdownPrimitive.Content>
