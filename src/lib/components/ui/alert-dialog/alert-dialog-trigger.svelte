<script>
  import { twMerge } from "tailwind-merge";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<AlertDialogPrimitive.Trigger
  class={twMerge(
    "rounded-md",
    "transition-all duration-300 ease-in-out",
    "size-10 grid place-items-center relative",
    "outline-none focus-visible:outline-accent",
    "text-clay-900/40 hover:text-accent hover:bg-clay-500/20",
    className
  )}
  {...restProps}
></AlertDialogPrimitive.Trigger>
