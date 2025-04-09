<script>
  import * as Select from '@components/ui/select/index';
  import Icon from '@components/shared/Icon.svelte';

  let isOpen = $state(false);
  let selectedValue = $state('Draft');
  let statuses = $state(['Draft', 'Published']);
</script>

<Select.Root
  bind:open={isOpen}
  type="single"
  onValueChange={(v) => (selectedValue = v)}
  items={statuses}
>
  <Select.Trigger className="flex items-center"
    ><p>{selectedValue}</p>
    <Icon
      name="chevron-down"
      className={['size-6 text-muted transition-transform duration-300', isOpen && 'rotate-180']}
    /></Select.Trigger
  >
  <Select.Content className="w-40">
    {#each statuses as stat}
      <Select.Item value={stat}>{stat}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
