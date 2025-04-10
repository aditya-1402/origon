<script>
  import Panel from '@components/configuration/panel/Panel.svelte';
  import Instruction from '@components/configuration/content/Instruction.svelte';
  import Tools from '@components/configuration/content/Tools.svelte';
</script>

<div class="bg-secondary relative flex h-full w-full flex-col gap-4 px-20 pb-6 lg:w-[55%] overflow-y-auto">
  <Panel />
  <Instruction />
  <Tools />
</div>
