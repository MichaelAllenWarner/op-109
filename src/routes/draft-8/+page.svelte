<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
  import draft8 from '$lib/assets/draft8.gif';
  import draft8Mp3 from '$lib/assets/draft8.mp3';
</script>

<Prose>
  <p>
    Draft 8 is a sketch of the exposition. It is on <a href="/page-46"
      >page 46</a
    >, staves 1-8. (“8” in this case means to double at the octave, “7” at the
    7th.)
  </p>

  <SketchAndAudio
    images={[
      {
        src: draft8,
        alt: 'Transcription of Draft 8, on page 46.',
        width: 906,
        height: 348,
      },
    ]}
    audioSrc={draft8Mp3}
  />
</Prose>
