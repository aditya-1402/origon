<script>
    import SectionLabel from '@components/shared/SectionLabel.svelte';
    import Icon from '$lib/components/shared/Icon.svelte';
  
    let tools = [
      { name: 'Slack', icon: 'slack', bg: 'bg-[#4A154B]' },
      { name: 'GitHub', icon: 'github', bg: 'bg-[#181717]' },
      { name: 'Linear', icon: 'linear', bg: 'bg-[#5E6AD2]' },
      { name: 'Docker', icon: 'docker', bg: 'bg-[#2496ED]' },
      { name: 'Notion', icon: 'notion', bg: 'bg-[#000000]' }
    ];
  </script>
  
  <section class="flex flex-col gap-4">
    <SectionLabel>Tools</SectionLabel>
  
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {#each tools as tool}
        <div
          class={`aspect-[16/9] relative cursor-pointer overflow-hidden rounded-lg px-8 py-6 text-white hover:opacity-90 hover:scale-105 transition-all duration-300 ${tool.bg}`}
        >
          <Icon name={tool.icon} class="absolute -right-2 -top-2 size-30 opacity-20" />
          <span class="absolute bottom-4 left-4 text-center text-xs">{tool.name}</span>
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