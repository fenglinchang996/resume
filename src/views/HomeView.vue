<script setup lang="ts">
import LanguageSelect from '@/components/common/LanguageSelect.vue';
import About from '@/components/About/index.vue';
import Skills from '@/components/Skills/index.vue';
import Experience from '@/components/Experience/index.vue';
import Project from '@/components/Projects/index.vue';
import Education from '@/components/Education/index.vue';
import PagePrint from '@/components/common/PagePrint.vue';
</script>

<template>
  <main class="relative mx-auto px-6 py-4 max-w-screen-lg md:pt-8">
    <div class="absolute top-4 right-6 md:top-8 flex gap-4 print:hidden">
      <LanguageSelect />
      <PagePrint />
    </div>
    <About />
    <!-- mobile -->
    <div class="lg:hidden print:hidden">
      <Skills />
      <Experience />
      <Project />
      <Education />
    </div>
    <!-- desktop -->
    <div class="hidden lg:grid print:grid grid-cols-2 gap-8">
      <div>
        <Skills />
        <Project />
        <Education />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  </main>
</template>
