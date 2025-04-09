<script>
  import { Select as SelectPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<SelectPrimitive.Portal class={className} {...restProps}></SelectPrimitive.Portal>
