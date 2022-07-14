<script>
  import Title from './Title.svelte';
  import Contact from './Contact.svelte';
  import Summary from './Summary.svelte';
</script>

<article class="space-y-4">
  <div
    class="space-y-3 md:flex md:justify-between md:space-y-0 print:flex print:justify-between print:space-y-0"
  >
    <Title />
    <Contact />
  </div>
  <Summary />
</article>
