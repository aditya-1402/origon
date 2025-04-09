<script>
  import { twMerge } from 'tailwind-merge';
  import { Select as SelectPrimitive } from 'bits-ui';

  let { className, variant = 'default', ...restProps } = $props();
</script>

<SelectPrimitive.Item
  class={twMerge(
    'text-[16px]',
    'flex items-center gap-3 px-4 py-2',
    'group transition-colors duration-200',
    'cursor-pointer outline-none',
    'hover:text-accent focus:text-accent hover:bg-accent/10 focus:bg-accent/10',
    'data-highlighted:text-accent data-highlighted:bg-accent/10',
    className
  )}
  {...restProps}
></SelectPrimitive.Item>
