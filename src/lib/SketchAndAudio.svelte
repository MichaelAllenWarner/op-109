<script lang="ts">
  export let image: {
    src: string;
    alt?: string;
  };
  export let audioSrc: string;
  export let caption: string | undefined = undefined;
</script>

<figure>
  <div class="space-y-4">
    <img class="mb-0" src={image.src} alt={image.alt || ''} />
    <audio controls src={audioSrc}><a href={audioSrc}>Download audio</a></audio>
  </div>
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
