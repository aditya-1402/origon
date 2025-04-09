<script>
  import { Tooltip as TooltipPrimitive } from "bits-ui";

  let { children } = $props();
</script>

<TooltipPrimitive.Portal>
  {@render children()}
</TooltipPrimitive.Portal>
