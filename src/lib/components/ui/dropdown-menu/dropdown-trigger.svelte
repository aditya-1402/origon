<script>
  import { twMerge } from 'tailwind-merge';
  import { DropdownMenu as DropdownPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<DropdownPrimitive.Trigger
  class={twMerge(
    'rounded-md',
    'cursor-pointer transition-all duration-300 ease-in-out',
    'relative grid size-10 place-items-center',
    'focus-visible:outline-accent outline-none',
    'text-clay-900/40 hover:text-accent hover:bg-muted/10',
    className
  )}
  {...restProps}
></DropdownPrimitive.Trigger>
