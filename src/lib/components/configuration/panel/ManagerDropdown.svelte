<script>
  import * as Select from '@components/ui/select/index';
  import Icon from '@components/shared/Icon.svelte';

  let selectedValue = $state('IT Helpdesk');
  let isOpen = $state(false);
  let options = $state(['IT Helpdesk', 'IT Support', 'IT Training']);
</script>

<Select.Root
  loop={true}
  bind:open={isOpen}
  type="single"
  onValueChange={(v) => (selectedValue = v)}
  items={options}
>
  <Select.Trigger className="font-medium text-base flex items-center"
    ><p>{selectedValue}</p>
    <Icon
      name="chevron-down"
      className={['size-6 text-muted transition-transform duration-300', isOpen && 'rotate-180']}
    /></Select.Trigger
  >
  <Select.Content>
    {#each options as option}
      <Select.Item value={option}>{option}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
