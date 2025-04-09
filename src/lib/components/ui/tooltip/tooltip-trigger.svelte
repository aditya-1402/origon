<script>
  import { twMerge } from "tailwind-merge";
  import { Tooltip as TooltipPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<TooltipPrimitive.Trigger class={twMerge(className)} {...restProps}
></TooltipPrimitive.Trigger>
