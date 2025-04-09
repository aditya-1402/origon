<script>
  import { Popover as PopoverPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<PopoverPrimitive.Trigger
  class={twMerge(
    "rounded-md",
    "transition-all duration-300 ease-in-out",
    "size-10 grid place-items-center relative",
    "outline-none focus-visible:outline-accent",
    "text-clay-900/40 hover:text-accent hover:bg-clay-500/20",
    className
  )}
  {...restProps}
></PopoverPrimitive.Trigger>
