<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft6a from '$lib/assets/draft6a.gif';
  import draft6b from '$lib/assets/draft6b.gif';
  import draft6aMp3 from '$lib/assets/draft6a.mp3';
  import draft6bMp3 from '$lib/assets/draft6b.mp3';
  import draft6cMp3 from '$lib/assets/draft6c.mp3';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
</script>

<Prose>
  <p>
    Drafts 6a, 6b, and 6c begin on <a href="/page-42">page 42</a> and extend
    into <a href="/page-43">page 43</a> as the continuity draft of the
    exposition. Draft 6a starts with the original, crossed out version on stave
    5/6, last two measures, continuing to the <em>lower</em> voice on stave 9
    (crossed out as well). This then continues through
    <a href="/page-42">page 42</a>
    and <a href="/page-43">43</a> to the end of the exposition on
    <a href="/page-42">page 42</a>, staves 11 and 12.
  </p>

  <SketchAndAudio
    images={[
      {
        src: draft6a,
        alt: 'Transcription of the part of Draft 6 on page 42.',
      },
      {
        src: draft6b,
        alt: 'Transcription of the part of Draft 6 on page 43.',
      },
    ]}
    audioSrc={draft6aMp3}
    caption="Draft 6a"
  />

  <p>
    Draft 6b is the same as above, except it takes the upper voice on <a
      href="/page-42">page 42</a
    >, stave 9, bars 1-3.
  </p>

  <figure>
    <audio controls src={draft6bMp3}
      ><a href={draft6bMp3}>Download audio.</a></audio
    >
    <figcaption>Draft 6b</figcaption>
  </figure>

  <p>
    Draft 6c uses only the uncancelled material on <a href="/page-42">page 42</a
    >
    and is extended. This goes from <a href="/page-42">page 42</a>, stave 6,
    last two bars, to stave 9 after the crossed out material (beginning with the
    E quarter note). The extention is on <a href="/page-43">page 43</a>. From
    the last two bars of staves 4 and 5, take the Vi=de (the Vi= connects with
    =de below) to stave 14. This then reconnects with the previous material, via
    the “100”s, to staves 8 and 9. This then continues to the end of the
    exposition, closing in B minor as before.
  </p>

  <figure>
    <audio controls src={draft6cMp3}
      ><a href={draft6cMp3}>Download audio.</a></audio
    >
    <figcaption>Draft 6c</figcaption>
  </figure>
</Prose>
