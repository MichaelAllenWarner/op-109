<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import op109iia from '$lib/assets/op109iia.jpg';
  import op109iib from '$lib/assets/op109iib.jpg';
  import op109iic from '$lib/assets/op109iic.jpg';
  import op109iid from '$lib/assets/op109iid.jpg';
  import op109Mp3 from '$lib/assets/OP109.mp3';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
  import Head from '$lib/Head.svelte';
</script>

<Head />

<Prose>
  <p>
    The finished work is the entire second movement of the Piano Sonata in E
    major, Op. 109.
  </p>

  <figure>
    <audio controls src={op109Mp3}><a href={op109Mp3}>Download audio.</a></audio
    >
    <figcaption>
      William Kinderman, piano, from his CD titled: <cite
        >Beethoven, The Last Three Sonatas</cite
      > (Helios, 2002).
    </figcaption>
  </figure>

  <SketchAndAudio
    images={[
      {
        src: op109iia,
        alt: 'Page 1 of Op 109, second movement.',
        width: 658,
        height: 866,
      },
      {
        src: op109iib,
        alt: 'Page 2 of Op 109, second movement.',
        width: 658,
        height: 866,
      },
      {
        src: op109iic,
        alt: 'Page 3 of Op 109, second movement.',
        width: 658,
        height: 866,
      },
      {
        src: op109iid,
        alt: 'Page 4 of Op 109, second movement.',
        width: 658,
        height: 866,
      },
    ]}
  />
</Prose>
