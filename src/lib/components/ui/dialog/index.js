import { Dialog as DialogPrimitive } from 'bits-ui';

import Trigger from './dialog-trigger.svelte';
import Content from './dialog-content.svelte';
import Portal from './dialog-portal.svelte';
import Overlay from './dialog-overlay.svelte';

const Root = DialogPrimitive.Root;

export {
  Root,
  Trigger,
  Content,
  Portal,
  Overlay,
  Trigger as DialogTrigger,
  Content as DialogContent,
  Portal as DialogPortal,
  Overlay as DialogOverlay
};
