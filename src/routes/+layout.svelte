<script lang="ts">
  import '../app.postcss';
  import { page } from '$app/stores';
  import PageHeader from '$lib/PageHeader.svelte';
  import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<div class="bg-[#CCCC99] pt-8 pb-12">
  <div class="container space-y-10 sm:space-y-12">
    <header>
      <hgroup class="space-y-5 max-w-5xl mx-auto">
        <h2 class="text-2xl sm:text-3xl">
          Sketches for Beethoven’s Piano Sonata in E, Opus 109, Second Movement
        </h2>
        <p class="text-xl">Dr. William Kinderman</p>
      </hgroup>
    </header>

    <main class="space-y-12">
      <PageHeader title={$page.data.title} />
      <slot />
      <Nav />
    </main>
  </div>
</div>
