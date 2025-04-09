<script>
  import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<AlertDialogPrimitive.Portal class={className} {...restProps}
></AlertDialogPrimitive.Portal>
