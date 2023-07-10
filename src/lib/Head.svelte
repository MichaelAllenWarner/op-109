<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title
    >{$page.data.title} | Sketches for Beethoven’s Piano Sonata in E, Opus 109, Second
    Movement</title
  >
  <meta name="description" content={$page.data.description} />
</svelte:head>
