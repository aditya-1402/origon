<script>
  import { twMerge } from 'tailwind-merge';
  import { DropdownMenu as DropdownPrimitive } from 'bits-ui';

  let { className, variant = 'default', ...restProps } = $props();
</script>

<DropdownPrimitive.Item
  class={twMerge(
    'text-[16px]',
    'flex items-center gap-3 px-4 py-2',
    'group transition-colors duration-200',
    'cursor-pointer outline-none',
    variant === 'default' &&
      'hover:text-accent hover:bg-accent/10 focus:text-accent focus:bg-accent/10 data-highlighted:bg-accent/10',
    variant === 'destructive' &&
      'hover:text-danger hover:bg-danger/10 focus:bg-danger/10 focus:text-danger text-danger data-highlighted:bg-danger/10',
    className
  )}
  {...restProps}
></DropdownPrimitive.Item>
