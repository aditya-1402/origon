<script>
  import { twMerge } from 'tailwind-merge';
  import { Button as ButtonPrimitive } from 'bits-ui';

  let { className, children, ...restProps } = $props();
</script>

<ButtonPrimitive.Root
  class={twMerge(
    'px-4 py-2',
    'rounded-full',
    'text-foreground',
    'transition-colors duration-300',
    'hover: text-accent hover:bg-accent/10',
    className
  )}
  {...restProps}
>
  {@render children()}
</ButtonPrimitive.Root>
