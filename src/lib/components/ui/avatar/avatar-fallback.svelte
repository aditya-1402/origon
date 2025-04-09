<script>
  import { twMerge } from "tailwind-merge";
  import { Avatar as AvatarPrimitive } from "bits-ui";

  let { className, ...restProps } = $props();
</script>

<AvatarPrimitive.Fallback
  class={twMerge(
    "size-7",
    "bg-accent text-white text-2xs",
    "rounded-full grid place-items-center",
    "font-medium",
    className
  )}
  {...restProps}
></AvatarPrimitive.Fallback>
