<script>
  import { twMerge } from "tailwind-merge";
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<AlertDialogPrimitive.Title
  class={twMerge("text-base font-medium mb-2", className)}
  {...restProps}
></AlertDialogPrimitive.Title>
