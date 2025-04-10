<script>
  import * as Dialog from '$lib/components/ui/dialog';
  import { Button } from '$lib/components/ui/button';
  import Icon from '$lib/components/shared/Icon.svelte';
  let { open = $bindable(false), onSubmit } = $props();

  let agentName = $state('');

  function handleSubmit() {
    onSubmit(agentName);
    open = false;
    agentName = '';
  }

  function handleOpenChange(open) {
    if (!open) {
      agentName = '';
    }
  }
</script>

<Dialog.Root bind:open onOpenChange={handleOpenChange}>
  <Dialog.Overlay />
  <Dialog.Content className="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <Icon name="origon-color" className="h-6 w-6" />
      <h1 class="text-base font-semibold">New Super Agent</h1>
    </div>

    <input
      type="text"
      placeholder="Agent Name"
      bind:value={agentName}
      class="focus:border-accent !mt-6 rounded-md border border-black/10 p-2 transition-all duration-300 focus:outline-none dark:border-white/10"
    />

    <div class="flex justify-end gap-2">
      <Button
        onclick={() => (open = false)}
        className="hover:text-stone-500 dark:hover:text-foreground dark:text-stone-500 hover:bg-transparent"
        >Cancel</Button
      >
      <Button disabled={!agentName} onclick={handleSubmit} className="text-accent">Create</Button>
    </div>
  </Dialog.Content>
</Dialog.Root>
