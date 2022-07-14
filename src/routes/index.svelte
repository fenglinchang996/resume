<script>
  import About from '$components/About/index.svelte';
  import Skills from '$components/Skills/index.svelte';
  import Experience from '$components/Experience/index.svelte';
  import Projects from '$components/Projects/index.svelte';
  import Education from '$components/Education/index.svelte';
</script>

<main class="mx-auto px-6 py-4 max-w-screen-lg md:pt-8">
  <About />
  <div class="lg:hidden print:hidden">
    <Skills />
    <Experience />
    <Projects />
    <Education />
  </div>
  <div class="hidden lg:grid print:grid grid-cols-2 gap-8">
    <div>
      <Skills />
      <Projects />
    </div>
    <div>
      <Experience />
      <Education />
    </div>
  </div>
</main>
