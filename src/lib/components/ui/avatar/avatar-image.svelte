<script>
  import { twMerge } from "tailwind-merge";
  import { Avatar as AvatarPrimitive } from "bits-ui";

  let { src, alt, className, ...restProps } = $props();
</script>

<AvatarPrimitive.Image
  {src}
  {alt}
  class={twMerge(
    "size-7",
    "object-cover rounded-full",
    className
  )}
  {...restProps}
/>
