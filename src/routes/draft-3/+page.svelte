<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft3a from '$lib/assets/draft3a.gif';
  import draft3b from '$lib/assets/draft3b.gif';
  import draft3Mp3 from '$lib/assets/draft3.mp3';
</script>

<Prose>
  <p>
    Draft 3, on <a href="/page-37">page 37</a>, staves 7-8. The “Vi=100” about
    three measures from the end marks a continuation to
    <a href="/page-39">page 39</a>, staves 1 and 2 (“100”):
  </p>

  <figure>
    <img src={draft3a} alt="Transcription of the part of Draft 3 on page 37." />
  </figure>

  <figure>
    <img src={draft3b} alt="Transcription of the part of Draft 3 on page 39." />
  </figure>

  <figure>
    <audio controls src={draft3Mp3}
      ><a href={draft3Mp3}>Download audio.</a></audio
    >
  </figure>
</Prose>
