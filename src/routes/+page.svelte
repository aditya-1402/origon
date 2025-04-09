<script>
  import '../app.css';
  import { onMount } from 'svelte';

  import Icon from '@components/shared/Icon.svelte';
  import Canvas from '@components/canvas/Canvas.svelte';
  import Configuration from '@components/configuration/Configuration.svelte';

  // STATES & PROPS
  let mediaQuery;

  // FUNCTIONS & HANDLERS
  function updateDarkClass(e) {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // LIFECYCLE METHODS
  onMount(() => {
    // Light & Dark Mode Settings
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateDarkClass(mediaQuery);
    mediaQuery.addEventListener('change', updateDarkClass);

    return () => {
      mediaQuery.removeEventListener('change', updateDarkClass);
    };
  });
</script>

<div class="text-foreground bg-background flex h-[calc(100vh-56px)] flex-col lg:flex-row">
  <Configuration />
  <Canvas />
</div>
