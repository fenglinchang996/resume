<script setup lang="ts">
import About from '@/components/About/index.vue';
import Skills from '@/components/Skills/index.vue';
import Experience from '@/components/Experience/index.vue';
import Project from '@/components/Projects/index.vue';
import Education from '@/components/Education/index.vue';
import Menubar from '@/components/Menubar/index.vue';
import Toolbar from '@/components/Toolbar/index.vue';
</script>

<template>
  <main class="relative mx-auto px-6 py-4 max-w-screen-lg md:pt-8">
    <div class="absolute top-5 right-6 md:top-8 print:hidden">
      <div class="md:hidden"><Menubar /></div>
      <div class="hidden md:block"><Toolbar /></div>
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
