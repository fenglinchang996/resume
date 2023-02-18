<script setup lang="ts">
import { useResumeContentStore } from '@/stores/resumeContent';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import Title from './Title.vue';
import Contact from './Contact.vue';
import Summary from './Summary.vue';

const resumeContentStore = useResumeContentStore();
const { content } = storeToRefs(resumeContentStore);
const about = computed(() => content.value.about);
</script>

<template>
  <article class="space-y-4">
    <div class="space-y-3 print:flex print:justify-between print:space-y-0">
      <Title :name="about.name" :headline="about.headline" />
      <Contact :contact="about.contact" />
    </div>
    <Summary :summary="about.summary" />
  </article>
</template>
