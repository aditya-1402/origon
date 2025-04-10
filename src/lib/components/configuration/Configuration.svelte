<script>
  import Panel from '@components/configuration/panel/Panel.svelte';
  import Instruction from '@components/configuration/content/Instruction.svelte';
  import Tools from '@components/configuration/content/Tools.svelte';
  import Separator from '@components/shared/Separator.svelte';
  import Editor from '@components/configuration/content/Editor.svelte';
</script>

<div
  class="bg-secondary relative flex h-full w-full flex-col gap-4 overflow-y-auto pb-6 lg:w-[55%]"
>
  <Panel />
  <div class="flex flex-col gap-4 px-20">
    <Instruction />
    <Separator />
    <Tools />
    <Editor />
  </div>
</div>
