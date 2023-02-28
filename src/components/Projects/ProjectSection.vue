<script setup lang="ts">
import { computed } from 'vue';
import { decorateUrl } from '@/utils/decorateUrl';

const props = defineProps<{
  title: string;
  briefDescription: string;
  startDate: Date;
  endDate?: Date;
  projectUrl?: string;
  repoUrl?: string;
  detailedDescription?: string | string[];
  skills?: string[];
}>();

const startDateString = computed(
  () =>
    `${props.startDate.toLocaleString('en-US', {
      month: 'short',
    })} ${props.startDate.getFullYear()}`
);

const endDateString = computed(() =>
  props.endDate
    ? `${props.endDate.toLocaleString('en-US', {
        month: 'short',
      })} ${props.endDate.getFullYear()}`
    : 'Present'
);
</script>

<template>
  <section>
    <div class="flex justify-between items-center">
      <h3 class="flex items-center">
        <span class="w-5 text-left text-red-400">
          <i class="fa-solid fa-folder"></i>
        </span>
        <span class="mx-1 text-lg font-bold">{{ title }}</span>
      </h3>
      <div class="text-gray-600 dark:text-gray-400">
        {{ startDateString }} - {{ endDateString }}
      </div>
    </div>
    <div class="font-bold">{{ briefDescription }}</div>
    <div class="my-2">
      <div v-if="projectUrl" class="space-x-2">
        <span class="inline-block w-4 text-blue-400">
          <i class="fa-solid fa-link"></i>
        </span>
        <a
          class="text-gray-600 dark:text-gray-400 underline"
          :href="decorateUrl(projectUrl)"
        >
          {{ projectUrl }}
        </a>
      </div>
      <div v-if="repoUrl" class="space-x-2">
        <span class="inline-block w-4 text-[#333333] dark:text-neutral-300">
          <i class="fa-brands fa-github"></i>
        </span>
        <a
          class="text-gray-600 dark:text-gray-400 underline"
          :href="decorateUrl(repoUrl)"
        >
          {{ repoUrl }}
        </a>
      </div>
    </div>
    <div v-if="detailedDescription" class="my-1">
      <ul
        v-if="Array.isArray(detailedDescription)"
        class="list-disc list-inside"
      >
        <li
          v-for="descriptionItem of detailedDescription"
          :key="descriptionItem"
        >
          {{ descriptionItem }}
        </li>
      </ul>
      <p v-else-if="typeof detailedDescription === 'string'">
        {detailedDescription}
      </p>
    </div>
    <div v-if="skills && skills.length > 0" class="my-1 flex gap-1">
      <span class="inline-block w-4 text-gray-600 dark:text-gray-400">
        <i class="fa-solid fa-screwdriver-wrench"></i>
      </span>
      <div>
        <span class="font-medium">Skills</span>: {{ skills.join(', ') }}
      </div>
    </div>
  </section>
</template>
