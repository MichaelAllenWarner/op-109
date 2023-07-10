<script lang="ts">
  import Prose from '$lib/Prose.svelte';
  import draft5a1 from '$lib/assets/draft5a1.gif';
  import draft5a2 from '$lib/assets/draft5a2.gif';
  import draft5a3 from '$lib/assets/draft5a3.gif';
  import draft5a4 from '$lib/assets/draft5a4.gif';
  import draft5aWav from '$lib/assets/draft5a.wav';
  import draft5bMp3 from '$lib/assets/draft5b.mp3';
  import Head from '$lib/Head.svelte';
</script>

<Head />

<Prose>
  <p>
    Draft 5a begins on <a href="/page-37">page 37</a>, staves 7-8 as in Drafts 3
    and 4. It skips the small notes of stave 7 and 8, continuing with the larger
    notes on staves 10 and the lower continuation in the middle of stave 10. The
    “30” at the end of this system denotes an index to its continuation on
    <a href="/page-39">page 39</a>, stave 9.
  </p>

  <figure>
    <img
      src={draft5a1}
      alt="Transcription of the part of Draft 5a on page 37."
      width={974}
      height={195}
    />
  </figure>

  <p>
    Staves 8 and 9 on <a href="/page-39">page 39</a> continue the idea in the
    bass clef. It continues through the system, leaving out insertions and
    questionable notes, to the <em>upper</em> voice in stave 8. This continues
    to the third notated bar of stave 10 (in two voices), which then connects
    with the second bar of stave 12/11 and 13/12 to the two F#’s in the middle
    of the system. A falling circle of fifths sequence then takes the idea to
    the end of <a href="/page-39">page 39</a>.
  </p>

  <figure>
    <img
      src={draft5a2}
      alt="Transcription of the part of Draft 5a on page 39."
      width={982}
      height={529}
    />
  </figure>

  <p>
    A speculative continuation of this idea is on <a href="/page-40">page 40</a
    >, stave 7 through stave 7/8. This uses a later revised version through to
    stave 9 for a double ending. After the first ending, he returns to “Vi=100”
    on <a href="/page-37">page 37</a> for the repeat to the second ending.
  </p>

  <figure>
    <img
      src={draft5a3}
      alt="Transcription of the part of Draft 5a on page 40."
      width={963}
      height={129}
    />
  </figure>

  <p>
    Upon this second ending, he returns to a statement of the theme in A minor
    in the bass (noted on <a href="/page-38">page 38</a>, stave 6-8)
  </p>

  <figure>
    <img
      src={draft5a4}
      alt="Transcription of the part of Draft 5a on page 38."
      width={966}
      height={133}
    />
  </figure>

  <hr />

  <figure>
    <audio controls src={draft5aWav}
      ><a href={draft5aWav}>Download audio.</a></audio
    >
    <figcaption>Draft 5a</figcaption>
  </figure>

  <figure>
    <audio controls src={draft5bMp3}
      ><a href={draft5bMp3}>Download audio.</a></audio
    >
    <figcaption>
      Example 5b is identical to 5a, except that it incorporates the two bar
      insert on <a href="/page-39">page 39</a>, stave 8, and takes the
      <em>lower</em> voice at the end of that system, continuing on the stave below.
      This creates an extended version of the above.
    </figcaption>
  </figure>
</Prose>
