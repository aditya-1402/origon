<script>
  import { DropdownMenu as DropdownPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<DropdownPrimitive.Portal class={className} {...restProps}
></DropdownPrimitive.Portal>
