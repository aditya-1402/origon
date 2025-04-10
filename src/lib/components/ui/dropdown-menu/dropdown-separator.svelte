<script>
  import { twMerge } from 'tailwind-merge';
  import { DropdownMenu as DropdownPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<DropdownPrimitive.Separator
  class={twMerge('my-2', 'h-px w-full', 'bg-black/10 dark:bg-white/10', className)}
  {...restProps}
/>
