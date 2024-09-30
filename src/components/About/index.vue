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
    <div>
      <Title :name="about.name" :headline="about.headline"></Title>
    </div>
    <div
      class="flex flex-col-reverse md:flex-row print:flex-row md:justify-between print:justify-between gap-x-10 gap-y-6"
    >
      <Summary :summary="about.summary"></Summary>
      <Contact :contact="about.contact"></Contact>
    </div>
  </article>
</template>
