<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useResumeContentStore } from '@/stores/resumeContent';
import CategoryBlock from '@/components/common/CategoryBlock.vue';
import CategoryTitle from '@/components/common/CategoryTitle.vue';
import EducationSection from './EducationSection.vue';

const resumeContentStore = useResumeContentStore();
const { content } = storeToRefs(resumeContentStore);
const educationList = computed(() => content.value.education);
</script>

<template>
  <CategoryBlock>
    <CategoryTitle title="Education" />
    <dvi class="space-y-3">
      <EducationSection
        v-for="{
          school,
          degree,
          fieldOfStudy,
          startDate,
          endDate,
        } of educationList"
        :key="`${school}-${degree}-${fieldOfStudy}`"
        :school="school"
        :degree="degree"
        :fieldOfStudy="fieldOfStudy"
        :startDate="startDate"
        :endDate="endDate"
      />
    </dvi>
  </CategoryBlock>
</template>
