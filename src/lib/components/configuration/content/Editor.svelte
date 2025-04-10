<script>
    import { onDestroy, onMount } from 'svelte';
  
    let editor;
    let monaco;
    let editorContainer;
    let base64Content = '';
  
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
  
    function exportBase64() {
      const code = editor.getValue();
      base64Content = btoa(unescape(encodeURIComponent(code))); // proper Unicode-safe base64
    }
  </script>
  
  <div class="overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-sm">
    <div class="editor-container" bind:this={editorContainer}></div>
  </div>
  
  <div class="mt-4 flex items-center justify-between gap-4">
    <button
      class="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700"
      on:click={exportBase64}
    >
      Export as Base64
    </button>
  
    {#if base64Content}
      <div class="w-full overflow-x-auto rounded bg-gray-900 p-2 text-xs text-green-400">
        {base64Content}
      </div>
    {/if}
  </div>
  
  <style>
    .editor-container {
      width: 100%;
      height: 600px;
      overflow: hidden;
    }
  </style>
  