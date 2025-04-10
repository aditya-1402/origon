<script>
  import { twMerge } from 'tailwind-merge';
  import { Dialog as DialogPrimitive } from 'bits-ui';

  let { className, ...restProps } = $props();
</script>

<DialogPrimitive.Trigger
  class={twMerge(
    'rounded-md',
    'cursor-pointer transition-all duration-300 ease-in-out',
    'relative grid size-10 place-items-center',
    'focus-visible:outline-accent outline-none',
    className
  )}
  {...restProps}
></DialogPrimitive.Trigger>
