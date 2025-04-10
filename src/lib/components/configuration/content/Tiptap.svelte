<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';

  let element;
  let editor;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [StarterKit],
      content: '<p>Hello World! 🌍️ </p>',
      editorProps: {
        attributes: {
          class: 'h-full w-full focus:outline-none'
        }
      },
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      }
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

<div class="prose text-foreground min-h-50 w-full max-w-none text-base" bind:this={element}></div>

<style>
  button.active {
    background: black;
    color: white;
  }

  :global(.ProseMirror) {
    height: 100%;
    width: 100%;
  }
</style>
