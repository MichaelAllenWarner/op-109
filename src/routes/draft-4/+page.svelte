<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft4 from '$lib/assets/draft4.gif';
  import draft4Mp3 from '$lib/assets/draft4.mp3';
</script>

<Prose>
  <p>
    Draft 4 begins on <a href="/page-37">page 37</a>, staves 7-8 as in Draft 3,
    but continues further, skipping the small notes in the last bar of stave 7,
    but taking small notes at beginning of stave 10. This continues with the
    <em>upper</em> line continuing to a close in B minor in stave 12.
  </p>

  <figure>
    <img src={draft4} alt="Transcription of Draft 4 on page 37." />
  </figure>

  <figure>
    <audio controls src={draft4Mp3}
      ><a href={draft4Mp3}>Download audio.</a></audio
    >
  </figure>
</Prose>
