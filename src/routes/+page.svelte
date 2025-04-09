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
    // Light & Dark Mode Settings
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateDarkClass(mediaQuery);
    mediaQuery.addEventListener('change', updateDarkClass);

    return () => {
      mediaQuery.removeEventListener('change', updateDarkClass);
    };
  });
</script>

<div class="text-foreground"></div>
