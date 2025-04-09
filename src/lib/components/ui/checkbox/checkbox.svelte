<script>
  import { twMerge } from "tailwind-merge";
  import { Checkbox as CheckboxPrimitive } from "bits-ui";

  let { className, checked = $bindable(false), ...restProps } = $props();
</script>

<CheckboxPrimitive.Root
  bind:checked
  class={twMerge(
    "size-5",
    "bg-clay-900 border border-clay-900",
    "peer inline-flex items-center justify-center rounded",
    "transition-all duration-150 ease-in-out active:scale-[0.98]",
    "data-[state=unchecked]:border-clay-500 data-[state=unchecked]:bg-transparent",
    className
  )}
  {...restProps}
></CheckboxPrimitive.Root>
