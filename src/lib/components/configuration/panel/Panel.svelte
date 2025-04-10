<script>
  import * as Select from '@components/ui/select/index';
  import * as Dropdown from '@components/ui/dropdown-menu/index';
  import Icon from '@components/shared/Icon.svelte';
  import ManagerDropdown from './ManagerDropdown.svelte';
  import StatusDropdown from './StatusDropdown.svelte';
  import ActionDropdown from './ActionDropdown.svelte';
  import { Button } from '@components/ui/button/index';
</script>

<div class="bg-secondary sticky top-0 left-0 z-10 flex w-full items-center justify-between py-6">
  <ManagerDropdown />

  <div class="flex items-center gap-10">
    <!-- Second Select -->
    <StatusDropdown />
    <!-- Deploy Button -->
    <Button className="flex items-center gap-1 text-accent">
      <Icon name="deploy" className="size-5" />
      Deploy
    </Button>
    <!-- Action Dropdown -->
    <ActionDropdown />
  </div>
</div>
