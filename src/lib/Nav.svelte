<script lang="ts">
  import { page } from '$app/stores';

  // programmatically generate all the `/draft-n` links
  const draftPageModules = import.meta.glob('/src/routes/draft-*/+page.svelte');
  const draftPageLinks = Array.from(
    { length: Object.keys(draftPageModules).length },
    (_, i) => {
      const n = i + 1;
      const url = `/draft-${n}`;
      const title = n === 1 ? 'Drafts 1a and b' : `Draft ${n}`;
      return { url, title };
    }
  );

  const links = [
    {
      title: 'Home',
      url: '/',
    },
    ...draftPageLinks,
    {
      title: 'Finished Work',
      url: '/finished-work',
    },
  ];

  $: currentLink = links.find((link) => link.url === $page.url.pathname);
  $: currentIndex = currentLink ? links.indexOf(currentLink) : undefined;
  $: previousLink =
    currentIndex !== undefined && links[currentIndex - 1]
      ? links[currentIndex - 1]
      : undefined;
  $: nextLink =
    currentIndex !== undefined && links[currentIndex + 1]
      ? links[currentIndex + 1]
      : undefined;
</script>

<nav aria-label="Main" class="mx-auto max-w-max space-y-6">
  {#if currentLink}
    <ol role="list" class="flex flex-wrap gap-x-3 gap-y-1.5 mx-auto max-w-max">
      {#if previousLink}
        <li
          class="relative pr-3 text-lg
            after:absolute after:last:hidden after:w-1 after:h-1 after:rounded-full after:bg-gray-600
            after:top-3 after:right-0 after:translate-x-1/2
          "
        >
          <a
            href={previousLink.url}
            class="underline text-gray-900 hover:text-gray-700 focus-visible:text-gray-700 transition-colors"
            >Previous</a
          >
        </li>
      {/if}
      {#if nextLink}
        <li
          class="relative pr-3 text-lg
            after:absolute after:last:hidden after:w-1 after:h-1 after:rounded-full after:bg-gray-600
            after:top-3 after:right-0 after:translate-x-1/2
          "
        >
          <a
            href={nextLink.url}
            class="underline text-gray-900 hover:text-gray-700 focus-visible:text-gray-700 transition-colors"
            >Next</a
          >
        </li>
      {/if}
    </ol>
  {/if}

  <ol role="list" class="flex flex-wrap gap-x-3 gap-y-1.5">
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
</nav>
