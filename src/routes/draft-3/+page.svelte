<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft3a from '$lib/assets/draft3a.gif';
  import draft3b from '$lib/assets/draft3b.gif';
  import draft3Mp3 from '$lib/assets/draft3.mp3';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
</script>

<Prose>
  <p>
    Draft 3, on <a href="/page-37">page 37</a>, staves 7-8. The “Vi=100” about
    three measures from the end marks a continuation to
    <a href="/page-39">page 39</a>, staves 1 and 2 (“100”):
  </p>

  <SketchAndAudio
    images={[
      {
        src: draft3a,
        alt: 'Transcription of the part of Draft 3 on page 37.',
        width: 931,
        height: 83,
      },
      {
        src: draft3b,
        alt: 'Transcription of the part of Draft 3 on page 39.',
        width: 946,
        height: 196,
      },
    ]}
    audioSrc={draft3Mp3}
  />
</Prose>
