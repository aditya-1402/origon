<script>
  import { twMerge } from "tailwind-merge";
  import { DropdownMenu as DropdownPrimitive } from "bits-ui";

  let { className, variant = "default", ...restProps } = $props();
</script>

<DropdownPrimitive.Item
  class={twMerge(
    "text-[16px]",
    "px-4 py-2 flex items-center gap-3",
    "group transition-colors duration-200",
    "cursor-pointer outline-none",
    variant === "default" &&
      "hover:text-accent hover:bg-clay-300 dark:hover:bg-clay-400 focus:text-accent focus:bg-clay-300 dark:focus:bg-clay-400",
    variant === "destructive" &&
      "hover:text-danger hover:bg-danger-muted/10 focus:bg-danger-muted/10 focus:text-danger text-danger",
    className
  )}
  {...restProps}
></DropdownPrimitive.Item>
