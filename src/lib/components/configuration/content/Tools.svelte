<script>
  import SectionLabel from '@components/shared/SectionLabel.svelte';
  import Icon from '$lib/components/shared/Icon.svelte';

  let tools = [
    { name: 'Hammer', icon: 'hammer' },
    { name: 'Wrench', icon: 'wrench' },
    { name: 'Drill', icon: 'drill' },
    { name: 'Saw', icon: 'saw' }
  ];
</script>

<section class="flex flex-col gap-4">
  <SectionLabel>Tools</SectionLabel>

  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
    {#each tools as tool}
      <div
        class="flex cursor-pointer flex-col items-center gap-4 rounded-lg bg-gray-100 px-8 py-6 transition hover:bg-gray-200"
      >
        <Icon name="random-one" class="size-8" />
        <span class="text-xs">{tool.name}</span>
      </div>
    {/each}

    <div
      class="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-gray-400 bg-white p-4 text-gray-500 transition hover:bg-gray-100"
    >
      <Icon name="plus" class="size-8" />
      <span class="text-sm">Add Tool</span>
    </div>
  </div>
</section>
