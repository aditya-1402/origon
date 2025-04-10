<script>
  import { onDestroy, onMount } from 'svelte';

  let editor;
  let monaco;
  let editorContainer;
  let activeTab = $state('code'); // 'code' or 'console'
  let consoleOutput = $state([]);

  function executeCode() {
    const code = editor.getValue();
    try {
      // Create a secure context for code execution
      const context = {
        console: {
          log: (...args) => {
            consoleOutput = [...consoleOutput, `> ${args.join(' ')}`];
          },
          error: (...args) => {
            consoleOutput = [...consoleOutput, `Error: ${args.join(' ')}`];
          }
        },
        print: (...args) => {
          consoleOutput = [...consoleOutput, `> ${args.join(' ')}`];
        }
      };

      // Execute the code in the secure context
      const func = new Function('context', `with(context){${code}}`);
      func(context);
    } catch (error) {
      consoleOutput = [...consoleOutput, `Error: ${error.message}`];
    }
  }

  onMount(async () => {
    monaco = (await import('./monaco')).default;

    editor = monaco.editor.create(editorContainer, {
      theme: 'vs-dark',
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      lineNumbers: 'on',
      renderLineHighlight: 'all',
      padding: { top: 16, bottom: 16 },
      automaticLayout: true,
      language: 'python',
      scrollbar: {
        vertical: 'visible',
        horizontal: 'visible',
        useShadows: false,
        verticalHasArrows: false,
        horizontalHasArrows: false
      }
    });

    const model = monaco.editor.createModel(
      "print('Hello from Monaco! (the editor, not the city...)')",
      'python'
    );
    editor.setModel(model);
  });

  onDestroy(() => {
    monaco?.editor.getModels().forEach((model) => model.dispose());
    editor?.dispose();
  });
</script>

<div class="overflow-hidden rounded-lg bg-stone-900 shadow-sm">
  <div class="flex items-center border-b border-gray-700 text-xs">
    <button
      class="relative px-4 py-2 {activeTab === 'code'
        ? 'text-white after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-3/4 after:rounded-lg after:bg-white'
        : 'text-gray-400 hover:text-white'}"
      on:click={() => (activeTab = 'code')}
    >
      Code
    </button>
    <button
      class="relative px-4 py-2 {activeTab === 'console'
        ? 'text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-t-lg after:bg-white'
        : 'text-gray-400 hover:text-white'}"
      on:click={() => (activeTab = 'console')}
    >
      Console
    </button>
  </div>

  <div class="relative">
    <div class="container" class:hidden={activeTab !== 'code'} bind:this={editorContainer} />
    <div class="container {activeTab !== 'console' ? 'hidden' : ''} bg-gray-900 p-4">
      <div class="font-mono text-gray-300">
        {#each consoleOutput as output}
          <div>{output}</div>
        {/each}
        {#if consoleOutput.length === 0}
          <div>> Console output will appear here...</div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
</style>
