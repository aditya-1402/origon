<script>
  import '../app.css';
  import { onMount } from 'svelte';

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
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set Initial Mode
    updateDarkClass(mediaQuery);

    // Watch For Changes
    mediaQuery.addEventListener('change', updateDarkClass);

    return () => {
      mediaQuery.removeEventListener('change', updateDarkClass);
    };
  });
</script>

<div>
  <h1 class="text-accent">Hello World</h1>
  <button
    onclick={() => {
      document.documentElement.classList.toggle('dark');
    }}>Toggle</button
  >
</div>
