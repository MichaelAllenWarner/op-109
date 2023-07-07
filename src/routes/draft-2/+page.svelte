<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft2 from '$lib/assets/draft2.gif';
  import draft2x from '$lib/assets/draft2x.gif';
  import draft2Mp3 from '$lib/assets/draft2.mp3';
</script>

<Prose>
  <p>
    Draft 2 begins on <a href="/page-41">page 41</a>, and continues through the
    entire page to <a href="/page-42">page 42</a>, staves 3 and 4. In the first
    bars at the beginning (<a href="/page-41">page 41</a>), we hear the crossed
    out versions in the tonic key (e minor) in the right hand.
  </p>

  <figure>
    <img src={draft2} alt="Transcription of the part of Draft 2 on page 41." />
  </figure>

  <figure>
    <img src={draft2x} alt="Transcription of the part of Draft 2 on page 42." />
  </figure>

  <figure>
    <audio controls src={draft2Mp3}
      ><a href={draft2Mp3}>Download audio.</a></audio
    >
  </figure>
</Prose>
