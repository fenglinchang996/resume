<script lang="ts">
  import Title from './Title.svelte';
  import Contact from './Contact.svelte';
  import Summary from './Summary.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { About, ResumeData } from '$types/resumeData';

  const resumeData = getContext<Writable<ResumeData>>('resumeData');
  let about: About;
  resumeData.subscribe((value) => (about = value.about));
</script>

<article class="space-y-4">
  <div class="space-y-3 print:flex print:justify-between print:space-y-0">
    <Title name={about.name} headline={about.headline} />
    <Contact contact={about.contact} />
  </div>
  <Summary summary={about.summary} />
</article>
