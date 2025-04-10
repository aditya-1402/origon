<script>
  import Agents from '@components/canvas/Agents.svelte';
  import { Button } from '@components/ui/button/index';
</script>

<div class="relative h-full w-full lg:flex-1">
  <div class="absolute top-0 left-0 z-10 flex w-full items-center justify-end p-6">
    <Button>View Logs</Button>
  </div>
  <Agents />
</div>
