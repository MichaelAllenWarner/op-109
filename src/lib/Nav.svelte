<script lang="ts">
  import { page } from '$app/stores';
  import NavList from './NavList.svelte';

  // programmatically generate all the `/draft-n` links
  const draftPageModules = import.meta.glob('/src/routes/draft-*/+page.svelte');
  const draftPageLinks = Array.from(
    { length: Object.keys(draftPageModules).length },
    (_, i) => {
      const n = i + 1;
      const url = `/draft-${n}`;
      const title = `Draft ${n}`;
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

  $: topLinks = [
    ...(previousLink ? [{ url: previousLink.url, title: 'Previous' }] : []),
    links[0],
    ...(nextLink ? [{ url: nextLink.url, title: 'Next' }] : []),
  ];

  const bottomLinks = links.slice(1);
</script>

<nav aria-label="Main" class="mx-auto max-w-max space-y-6">
  <NavList centered links={topLinks} {currentLink} />
  <NavList links={bottomLinks} {currentLink} />
</nav>
