<script>
  import { twMerge } from "tailwind-merge";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<AlertDialogPrimitive.Description
  class={twMerge("text-sm text-clay-900/50 mb-6", className)}
  {...restProps}
></AlertDialogPrimitive.Description>
