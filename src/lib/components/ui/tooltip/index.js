import Portal from "./tooltip-portal.svelte";
import Trigger from "./tooltip-trigger.svelte";
import Content from "./tooltip-content.svelte";
import { Tooltip as TooltipPrimitive } from "bits-ui";

const Root = TooltipPrimitive.Root;
const Provider = TooltipPrimitive.Provider;

export {
  Root,
  Portal,
  Trigger,
  Content,
  Provider,
  Root as TooltipRoot,
  Portal as TooltipPortal,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
  Provider as TooltipProvider,
};
