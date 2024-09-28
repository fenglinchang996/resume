<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useResumeContentStore } from '@/stores/resumeContent';
import CategoryBlock from '@/components/common/CategoryBlock.vue';
import CategoryTitle from '@/components/common/CategoryTitle.vue';
import ProjectSection from './ProjectSection.vue';

const resumeContentStore = useResumeContentStore();
const { content } = storeToRefs(resumeContentStore);
const projects = computed(() => content.value.projects);
</script>

<template>
  <CategoryBlock v-if="projects.length !== 0">
    <CategoryTitle title="Projects" />
    <div class="space-y-5">
      <ProjectSection
        v-for="project of projects"
        :key="project.title"
        :title="project.title"
        :brief-description="project.briefDescription"
        :start-date="project.startDate"
        :end-date="project.endDate"
        :project-url="project.projectUrl"
        :repo-url="project.repoUrl"
        :detailed-description="project.detailedDescription"
        :skills="project.skills"
      />
    </div>
  </CategoryBlock>
</template>
