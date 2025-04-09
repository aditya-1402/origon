import { DropdownMenu as DropdownPrimitive } from "bits-ui";

import Trigger from "./dropdown-trigger.svelte";
import Content from "./dropdown-content.svelte";
import Item from "./dropdown-item.svelte";
import Portal from "./dropdown-portal.svelte";
import Separator from "./dropdown-separator.svelte";

const Root = DropdownPrimitive.Root;

export {
  Root,
  Trigger,
  Content,
  Item,
  Portal,
  Separator,
  Root as Dropdown,
  Trigger as DropdownTrigger,
  Content as DropdownContent,
  Item as DropdownItem,
  Portal as DropdownPortal,
  Separator as DropdownSeparator,
};
