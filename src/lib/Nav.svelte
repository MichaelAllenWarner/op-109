<script lang="ts">
  import { page } from '$app/stores';

  // Could this be done programmatically?
  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Drafts 1a and b',
      url: '/draft-1',
    },
    {
      title: 'Draft 2',
      url: '/draft-2',
    },
    {
      title: 'Draft 3',
      url: '/draft-3',
    },
    {
      title: 'Draft 4',
      url: '/draft-4',
    },
    {
      title: 'Draft 5',
      url: '/draft-5',
    },
    // {
    //   title: 'Draft 6',
    //   url: '/draft-6',
    // },
    // {
    //   title: 'Draft 7',
    //   url: '/draft-7',
    // },
    // {
    //   title: 'Draft 8',
    //   url: '/draft-8',
    // },
    // {
    //   title: 'Draft 9',
    //   url: '/draft-9',
    // },
    // {
    //   title: 'Finished work',
    //   url: '/finished-work',
    // },
  ];
</script>

<nav aria-label="Main" class="mx-auto max-w-max">
  <ol
    role="list"
    class="
    flex flex-wrap gap-x-3 gap-y-1.5"
  >
    {#each links as link}
      <li
        class="
          relative pr-3 text-lg
          after:absolute after:last:hidden after:w-1 after:h-1 after:rounded-full after:bg-gray-600
          after:top-3 after:right-0 after:translate-x-1/2
        "
      >
        {#if link.url === $page.url.pathname}
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
