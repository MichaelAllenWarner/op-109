<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft7a1 from '$lib/assets/draft7a1.gif';
  import draft7a2 from '$lib/assets/draft7a2.gif';
  import draft7aMp3 from '$lib/assets/draft7a.mp3';
  import draft7bMp3 from '$lib/assets/draft7b.mp3';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
</script>

<Prose>
  <p>
    Draft 7a consists of the continuity draft of the second half of the
    movement. Starting on the first system of <a href="/page-44">page 44</a>, it
    continues all the way down to <a href="/page-45">page 45</a>, systems 3 and
    4 (<em>second</em> system), and going on to the bottom of the page. Taking
    the repeat marks where written (<a href="/page-44">page 44</a>, stave 9 and
    10, and <a href="/page-45">page 45</a> staves 13 and 14), it then concludes
    at the bottom of <a href="/page-45">page 45</a> in E <em>major</em>.
    (Figures not written were filled in to accompany the repeating sequence at
    the bottom of <a href="/page-45">page 45</a>, stave 13 and 14.)
  </p>

  <SketchAndAudio
    image={{
      src: draft7a1,
      alt: 'Transcription of the part of Draft 7 on page 44.',
    }}
    image2={{
      src: draft7a2,
      alt: 'Transcription of the part of Draft 7 on page 44.',
    }}
    audioSrc={draft7aMp3}
    caption="Draft 7a"
  />

  <p>
    Draft 7b is the same as above, except the repeated sequence on <a
      href="/page-45">page 45</a
    >, staves 13 and 14, then go on to the <em>top</em> of the page, staves 1
    and 2 (noted “<i>Ende</i>” by Beethoven), which concludes in e
    <em>minor</em>.
  </p>

  <figure>
    <audio controls src={draft7bMp3}
      ><a href={draft7bMp3}>Download audio.</a></audio
    >
    <figcaption>Draft 7b</figcaption>
  </figure>
</Prose>
