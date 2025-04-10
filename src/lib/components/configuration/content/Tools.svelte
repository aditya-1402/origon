<script>
  import SectionLabel from '@components/shared/SectionLabel.svelte';
  let tools = ['Hammer', 'Wrench', 'Drill', 'Saw']; // example tools
</script>

<section>
  <SectionLabel>Tools</SectionLabel>

  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {#each tools as tool}
      <div class="cursor-pointer rounded-lg bg-gray-100 p-4 shadow transition hover:bg-gray-200">
        {tool}
      </div>
    {/each}

    <div
      class="cursor-pointer rounded-lg border-2 border-dashed border-gray-400 bg-white p-4 text-center text-gray-500 transition hover:bg-gray-100"
    >
      + Add Tool
    </div>
  </div>
</section>
