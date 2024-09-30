<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useResumeContentStore } from '@/stores/resumeContent';
import CategoryBlock from '@/components/common/CategoryBlock.vue';
import CategoryTitle from '@/components/common/CategoryTitle.vue';
import SkillSection from './SkillSection.vue';

const resumeContentStore = useResumeContentStore();
const { content } = storeToRefs(resumeContentStore);
const skills = computed(() => content.value.skills);
</script>

<template>
  <CategoryBlock>
    <CategoryTitle title="Skills" />
    <div
      class="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-3 lg:flex lg:flex-col"
    >
      <div v-for="{ title, skillList } of skills" :key="title">
        <SkillSection :title="title" :skill-list="skillList" />
      </div>
    </div>
  </CategoryBlock>
</template>
