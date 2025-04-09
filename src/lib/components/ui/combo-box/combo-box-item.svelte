<script>
  import { twMerge } from "tailwind-merge";
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<ComboboxPrimitive.Item
  class={twMerge(
    "text-[16px]",
    "cursor-pointer outline-none",
    "px-4 py-2 flex items-center gap-3",
    "group transition-colors duration-200",
    "hover:text-accent hover:bg-clay-300 dark:hover:bg-clay-400",
    "[&[data-highlighted]]:text-accent [&[data-highlighted]]:bg-clay-300 dark:[&[data-highlighted]]:bg-clay-400",
    className
  )}
  {...restProps}
/>
