import { Combobox as ComboboxPrimitive } from "bits-ui";

import Item from "./combo-box-item.svelte";
import Input from "./combo-box-input.svelte";
import Content from "./combo-box-content.svelte";

const Root = ComboboxPrimitive.Root;
const Trigger = ComboboxPrimitive.Trigger;

export {
  Root,
  Trigger,
  Input,
  Content,
  Item,
  Root as ComboboxRoot,
  Trigger as ComboboxTrigger,
  Input as ComboboxInput,
  Content as ComboboxContent,
  Item as ComboboxItem,
};
