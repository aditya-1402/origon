<script>
  import { Dialog as DialogPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<DialogPrimitive.Portal class={className} {...restProps}></DialogPrimitive.Portal>
