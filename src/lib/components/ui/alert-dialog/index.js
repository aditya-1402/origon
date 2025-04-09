import { AlertDialog as AlertDialogPrimitive } from "bits-ui";

import Trigger from "./alert-dialog-trigger.svelte";
import Content from "./alert-dialog-content.svelte";
import Portal from "./alert-dialog-portal.svelte";
import Overlay from "./alert-dialog-overlay.svelte";
import Title from "./alert-dialog-title.svelte";
import Description from "./alert-dialog-description.svelte";
import Actions from "./alert-dialog-action.svelte";

const Root = AlertDialogPrimitive.Root;

export {
  Root,
  Trigger,
  Content,
  Portal,
  Overlay,
  Title,
  Description,
  Actions,
  Root as AlertDialogRoot,
  Trigger as AlertDialogTrigger,
  Content as AlertDialogContent,
  Portal as AlertDialogPortal,
  Overlay as AlertDialogOverlay,
  Title as AlertDialogTitle,
  Description as AlertDialogDescription,
  Actions as AlertDialogActions,
};
