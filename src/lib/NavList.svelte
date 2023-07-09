<script lang="ts">
  export let centered = false;
  export let links: { url: string; title: string }[] = [];
  export let currentLink: (typeof links)[number] | undefined = undefined;
</script>

{#if links.length > 0}
  <ol
    role="list"
    class="flex flex-wrap gap-x-3 gap-y-1.5 {centered
      ? 'mx-auto max-w-max'
      : ''}"
  >
    {#each links as link}
      <li
        class="
          relative pr-3 text-lg
          after:absolute after:last:hidden after:w-1 after:h-1 after:rounded-full after:bg-gray-600
          after:top-3 after:right-0 after:translate-x-1/2
        "
      >
        {#if link === currentLink}
          <a href={link.url} aria-current="true" class="text-gray-700"
            >{link.title}</a
          >
        {:else}
          <a
            href={link.url}
            class="underline text-gray-900 hover:text-gray-700 focus-visible:text-gray-700 transition-colors"
            >{link.title}</a
          >
        {/if}
      </li>
    {/each}
  </ol>
{/if}
