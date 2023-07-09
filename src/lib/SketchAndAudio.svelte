<script lang="ts">
  export let images: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  }[];
  export let audioSrc: string | undefined = undefined;
  export let caption: string | undefined = undefined;
</script>

<figure>
  <div class="space-y-5">
    {#each images as image}
      <img
        class="!mb-0"
        src={image.src}
        alt={image.alt || ''}
        width={image.width}
        height={image.height}
      />
    {/each}
    {#if audioSrc}
      <audio controls src={audioSrc}
        ><a href={audioSrc}>Download audio</a></audio
      >
    {/if}
  </div>
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
