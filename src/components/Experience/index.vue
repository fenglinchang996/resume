<script setup lang="ts">
import { useResumeContentStore } from '@/stores/resumeContent';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import CategoryBlock from '@/components/common/CategoryBlock.vue';
import CategoryTitle from '@/components/common/CategoryTitle.vue';
import ExperienceSection from './ExperienceSection.vue';

const resumeContentStore = useResumeContentStore();
const { content } = storeToRefs(resumeContentStore);
const workExperience = computed(() => content.value.workExperience);
</script>

<template>
  <CategoryBlock>
    <CategoryTitle title="Work Experience" />
    <div class="space-y-5">
      <ExperienceSection
        v-for="{
          title,
          company,
          startDate,
          endDate,
          location,
          description,
          skills,
        } of workExperience"
        :key="`${company.name}-${title}`"
        :title="title"
        :company-name="company.name"
        :company-url="company.url"
        :start-date="startDate"
        :end-date="endDate"
        :location="location"
        :description="description"
        :skills="skills"
      />
    </div>
  </CategoryBlock>
</template>
