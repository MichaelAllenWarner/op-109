<script lang="ts">
  import '../app.postcss';
  import { page } from '$app/stores';
  import PageHeader from '../lib/PageHeader.svelte';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<header>Site header</header>

<main>
  <PageHeader title={$page.data.title} />
  <div class="container">
    <slot />
  </div>
</main>

<footer>Site footer</footer>
