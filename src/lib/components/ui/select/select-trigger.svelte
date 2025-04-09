<script>
  import { twMerge } from 'tailwind-merge';
  import { Select as SelectPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<SelectPrimitive.Trigger
  class={twMerge(
    'cursor-pointer transition-all duration-300 ease-in-out',
    'relative grid place-items-center',
    'focus-visible:outline-accent outline-none',
    'text-clay-foreground hover:text-accent',
    className
  )}
  {...restProps}
></SelectPrimitive.Trigger>
