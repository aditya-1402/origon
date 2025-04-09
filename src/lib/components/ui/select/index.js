import { Select as SelectPrimitive } from 'bits-ui';
import Trigger from './select-trigger.svelte';
import Content from './select-content.svelte';
import Item from './select-item.svelte';
import Portal from './select-portal.svelte';

const Root = SelectPrimitive.Root;

export {
  Root,
  Trigger,
  Content,
  Item,
  Portal,
  Root as SelectRoot,
  Trigger as SelectTrigger,
  Content as SelectContent,
  Item as SelectItem,
  Portal as SelectPortal
};
