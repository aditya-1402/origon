<script>
  import Panel from '@components/configuration/panel/Panel.svelte';
  import Instruction from '@components/configuration/content/Instruction.svelte';
  import Tools from '@components/configuration/content/Tools.svelte';
  import Separator from '@components/shared/Separator.svelte';
  import Editor from '@components/configuration/content/Editor.svelte';
</script>

<div
  class="bg-secondary relative flex h-full w-full flex-col gap-4 overflow-y-auto px-20 pb-6 lg:w-[55%]"
>
  <div class="flex flex-col gap-4">
    <Panel />
    <Instruction />
    <Separator/>
    <Tools />
    <Editor />
  </div>
</div>
