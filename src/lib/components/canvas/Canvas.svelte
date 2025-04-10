<script>
  import Agents from '@components/canvas/Agents.svelte';
</script>

<div class="relative h-full w-full lg:flex-1">
  <div class="absolute top-0 left-0 flex w-full items-center justify-end p-6">
    <button class="flex items-center gap-1 px-4 py-2"> View Logs </button>
  </div>
  <Agents />
</div>
