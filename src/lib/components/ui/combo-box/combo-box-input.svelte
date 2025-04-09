<script>
  import { twMerge } from "tailwind-merge";
  import { Combobox as ComboboxPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<ComboboxPrimitive.Input class={twMerge(className)} {...restProps} />
