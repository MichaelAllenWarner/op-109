<script lang="ts">
  import page35 from '$lib/assets/page35.jpeg';
  import sketch1 from '$lib/assets/sketch1.gif';
  import sketch1Mp3 from '$lib/assets/sketch1.mp3';
  import Prose from '$lib/Prose.svelte';
  import SketchAndAudio from '$lib/SketchAndAudio.svelte';
</script>

<Prose>
  <figure>
    <img src={page35} alt="A page from one of Beethoven’s sketchbooks." />
    <figcaption>
      <a href="/page-35">Page 35</a> of Beethoven’s Artaria 195 Sketchbook, which
      contains the conceptual sketch mentioned below of the second movement of the
      Op. 109 piano sonata.
    </figcaption>
  </figure>

  <p>
    This is a generative website that explores the creative process of Ludwig
    van Beethoven during the composition of his Piano Sonata in E, Opus 109,
    movement II. Researched and compiled by Dr. William Kinderman at the
    University of Illinois Urbana-Champaign School of Music, this investigation
    is made possible by examining Beethoven’s sketchbooks and drafts in the
    Artaria 195 Sketchbook.
  </p>
  <p>
    The Artaria 195 Sketchbook is held in the Music Department of the
    Staatsbibliothek preussischer Kulturbesitz, Berlin. As originally used by
    Beethoven, it included leaves now held separately in Berlin, in Paris at the
    Bibliotheque Nationale, and in the private collection of Dr. Matthew
    Malerich, Bakersfield, California.
  </p>
  <p>
    The following pages begin with a conceptual sketch, shown below, followed by
    what is thought to have been the order of sketches that led up to the final
    work, found in draft 10. At the bottom of each page are links to the next
    draft, as well as the other successive drafts.
  </p>
  <p>
    Included with each draft are MIDI renderings of the sketchbooks shown. It
    may be necessary in some sketches to follow the “roadmap” provided in the
    commentary to place what you are hearing with what you are seeing in the
    music. Beethoven often jumped around on a page, or even from page to page,
    in developing ideas in his sketchbooks. As a result, otherwise logical
    succession is often not heeded.
  </p>
  <p>
    Please feel free to jump around from sketch to sketch, and explore the
    genius behind the creation of this work.
  </p>

  <hr />

  <SketchAndAudio
    image={{ src: sketch1, alt: 'Transcription of a Beethoven sketch.' }}
    audioSrc={sketch1Mp3}
    caption="Transcription of Beethoven’s conceptual sketch for the second movement of Op. 109 piano sonata, from page 35 of the Artaria 195 Sketchbook."
  />

  <hr />

  <p>
    All material is drawn from William Kinderman, <cite
      >Artaria 195: Beethoven’s Sketchbook for the Missa Solemnis and the Piano
      Sonata in E Major, Opus 109</cite
    > (Urbana and Chicago: University of Illinois Press, 2003).
  </p>
</Prose>
