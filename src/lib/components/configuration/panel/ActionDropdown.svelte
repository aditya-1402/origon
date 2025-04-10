<script>
  import * as Dropdown from '@components/ui/dropdown-menu/index';
  import Icon from '@components/shared/Icon.svelte';
</script>

<!-- Dropdown Menu -->
<Dropdown.Root>
  <Dropdown.Trigger className="group hover:bg-accent/10 rounded-full">
    <Icon
      name="options"
      className="size-6 text-muted transition-colors duration-300 group-hover:text-accent"
    />
  </Dropdown.Trigger>
  <Dropdown.Content sideOffset={3} className="w-40">
    <Dropdown.Item>
      <Icon name="rename" className="size-6 dropdown-icon" />
      Rename
    </Dropdown.Item>
    <Dropdown.Separator />
    <Dropdown.Item variant="destructive">
      <Icon name="trash" className="size-6 dropdown-icon-destructive" />
      Delete
    </Dropdown.Item>
  </Dropdown.Content>
</Dropdown.Root>
