<script setup lang="ts">
import About from '@/components/About/index.vue';
import Skills from '@/components/Skills/index.vue';
import Experience from '@/components/Experience/index.vue';
import OtherExperience from '@/components/OtherExperience/index.vue';
import Project from '@/components/Projects/index.vue';
import Education from '@/components/Education/index.vue';
import Menubar from '@/components/Menubar/index.vue';
import Toolbar from '@/components/Toolbar/index.vue';
import { useInitializeThemeAppearance } from '@/composables/useInitializeThemeAppearance';

useInitializeThemeAppearance();
</script>

<template>
  <main class="relative mx-auto px-6 py-4 max-w-screen-lg md:pt-8">
    <div class="absolute top-5 right-6 md:top-8 print:hidden">
      <div class="md:hidden"><Menubar /></div>
      <div class="hidden md:block"><Toolbar /></div>
    </div>
    <div class="mb-6">
      <About />
    </div>
    <!-- mobile -->
    <div class="space-y-6 lg:hidden print:hidden">
      <Skills />
      <Experience />
      <OtherExperience />
      <Project />
      <Education />
    </div>
    <!-- desktop -->
    <div class="lg:grid print:grid grid-cols-3 gap-8">
      <div class="space-y-6 grid-col-start-1 grid-col-end-2">
        <Skills />
        <Education />
      </div>
      <div class="space-y-6 grid-col-start-2 grid-col-end-4">
        <Experience />
        <OtherExperience />
        <Project />
      </div>
    </div>
  </main>
</template>
