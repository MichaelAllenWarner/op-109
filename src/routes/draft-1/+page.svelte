<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft1a from '$lib/assets/draft1a.gif';
  import draft1aMp3 from '$lib/assets/draft1a.mp3';
  import draft1bMp3 from '$lib/assets/draft1b.mp3';
  import parallel1 from '$lib/assets/parallel1.gif';
  import parallel2 from '$lib/assets/parallel2.gif';
  import parallelMp3 from '$lib/assets/parallel.mp3';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
  import Head from '$lib/Head.svelte';
</script>

<Head />

<Prose>
  <figure>
    <img
      src={draft1a}
      alt="Transcription of a Beethoven sketch."
      width={972}
      height={325}
    />
    <figcaption>
      Draft 1a and 1b, found on <a href="/page-35">page 35</a>, stave 10–15.
    </figcaption>
  </figure>

  <figure>
    <audio controls src={draft1aMp3}
      ><a href={draft1aMp3}>Download audio.</a></audio
    >
    <figcaption>
      Earlier version (1a) incorporates figures noted on stave 9/10 above,
      measures 1 and 4.
    </figcaption>
  </figure>

  <figure>
    <audio controls src={draft1bMp3}
      ><a href={draft1bMp3}>Download audio.</a></audio
    >
    <figcaption>
      Later version (1b) uses same figure but at a third below, as notated with
      the rest of the figure in staves 10–15.
    </figcaption>
  </figure>

  <hr />

  <p>
    Parallel to the drafts above are these, found at the bottom of <a
      href="/page-35">page 35</a
    >
    and continued on the top of <a href="/page-36">page 36</a>:
  </p>

  <SketchAndAudio
    images={[
      {
        src: parallel1,
        alt: 'Transcription of the part of the parallel draft at the bottom of page 35.',
        width: 759,
        height: 176,
      },
      {
        src: parallel2,
        alt: 'Transcription of the part of the parallel draft at the top of page 36.',
        width: 979,
        height: 121,
      },
    ]}
    audioSrc={parallelMp3}
  />
</Prose>
