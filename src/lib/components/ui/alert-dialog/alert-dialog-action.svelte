<script>
  import { twMerge } from "tailwind-merge";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, type = "action", ...restProps } = $props();
</script>

{#if type === "cancel"}
  <AlertDialogPrimitive.Action
    class={twMerge(
      "px-6 py-2",
      "rounded-full text-sm",
      "transition-all duration-200",
      "opacity-60 hover:opacity-100 outline-none",
      "hover:bg-clay-100 dark:hover:bg-clay-400",
      className
    )}
    {...restProps}
  ></AlertDialogPrimitive.Action>
{:else}
  <AlertDialogPrimitive.Cancel
    class={twMerge(
      "px-6 py-2",
      "rounded-full text-sm",
      "transition-all duration-200",
      "outline-none",
      "!bg-red-500 text-white !hover:bg-red-600",
      className
    )}
    {...restProps}
  ></AlertDialogPrimitive.Cancel>
{/if}
