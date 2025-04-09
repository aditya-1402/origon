<script>
  import { twMerge } from "tailwind-merge";
  import { Label as LabelPrimitive } from "bits-ui";

  let { className, children, ...restProps } = $props();
</script>

<LabelPrimitive.Root
  class={twMerge(
    "text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    className
  )}
  {...restProps}
>
  {@render children()}
</LabelPrimitive.Root>
