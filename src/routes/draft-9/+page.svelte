<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
  import draft9a from '$lib/assets/draft9a.gif';
  import draft9b from '$lib/assets/draft9b.gif';
  import draft9c from '$lib/assets/draft9c.gif';
  import draft9d from '$lib/assets/draft9d.gif';
  import draft9e from '$lib/assets/draft9e.gif';
  import draft9aMp3 from '$lib/assets/draft9a.mp3';
  import draft9bMp3 from '$lib/assets/draft9b.mp3';
</script>

<Prose>
  <p>
    Draft 9a is of the exposition to the development sections. Beginning on <a
      href="/page-47">page 47</a
    >, stave 6-7, it continues above it to staves 4-5, then on to stave 9 (the
    crossed-out version), to stave 10, to stave 11-12, to stave 13-14, finally
    continuing to <a href="/page-48">page 48</a>, staves 1 and 2. Upon going
    through <a href="/page-48">page 48</a>, it continues through the whole of
    <a href="/page-49">page 49</a>
    (choosing a clean reading among the alternatives), and on to
    <a href="/page-50">page 50</a>. It finally ends taking the cancelled version
    of the cadence on staves 7-8.
  </p>

  <SketchAndAudio
    images={[
      { src: draft9a, alt: 'Transcription of part of Draft 9a on page 47.' },
      { src: draft9b, alt: 'Transcription of part of Draft 9a on page 48.' },
      { src: draft9c, alt: 'Transcription of part of Draft 9a on page 49.' },
      { src: draft9d, alt: 'Transcription of part of Draft 9a on page 50.' },
    ]}
    audioSrc={draft9aMp3}
    caption="Draft 9a"
  />

  <p>
    Draft 9b begins on <a href="/page-47">page 47</a> after stave 4-5, but
    taking up again on <a href="/page-46">page 46</a>, stave 10-11. It then goes
    to the recapitulation on the lowest system of <a href="/page-47">page 47</a>
    (fifth bar from the right side), and then on through pages
    <a href="/page-48">48</a>, <a href="/page-49">49</a>, and
    <a href="/page-50">50</a>. It ends by finding the later version of the
    cadence on <a href="/page-50">page 50</a>, stave 11 through 13-14, left
    side.
  </p>

  <SketchAndAudio
    images={[
      {
        src: draft9e,
        alt: 'Transcription of the part of Draft 9b on page 46.',
      },
    ]}
    audioSrc={draft9bMp3}
    caption="Draft 9b"
  />
</Prose>
