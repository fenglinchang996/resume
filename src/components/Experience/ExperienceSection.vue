<script setup lang="ts">
import { decorateUrl } from '@/utils/urlUtils';
import { computed } from 'vue';
import type { ExperienceDescription } from '@/types/resumeContent';

const props = defineProps<{
  title: string;
  companyName: string;
  companyUrl?: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  description?: ExperienceDescription[];
  skills?: string[];
}>();

const startDateString = computed(
  () =>
    `${props.startDate.toLocaleString('en-US', {
      month: 'short',
    })} ${props.startDate.getFullYear()}`,
);

const endDateString = computed(() =>
  props.endDate
    ? `${props.endDate.toLocaleString('en-US', {
        month: 'short',
      })} ${props.endDate.getFullYear()}`
    : 'Present',
);
</script>

<template>
  <section class="space-y-1">
    <div class="flex text-sm text-gray-600 dark:text-gray-400 justify-between">
      <div>
        {{ startDateString }}
        -
        {{ endDateString }}
      </div>
      <div v-if="location">{{ location }}</div>
    </div>
    <h3 class="text-lg font-bold">
      <div>
        <span>
          <a
            v-if="companyUrl"
            class="underline underline-offset-2"
            :href="decorateUrl(companyUrl)"
          >
            {{ companyName }}
          </a>
          <span v-else>{{ companyName }}</span>
        </span>
        <span> | </span>
        <span>{{ title }}</span>
      </div>
    </h3>
    <div>
      <ul class="[hyphens:auto] list-disc list-outside pl-4">
        <li v-for="descriptionItem of description" :key="descriptionItem.title">
          {{ descriptionItem.title }}
          <ul
            v-if="
              descriptionItem.children && descriptionItem.children.length > 0
            "
            class="pl-4 list-outside list-circle"
          >
            <li
              v-for="descriptionItemChild of descriptionItem.children"
              :key="descriptionItemChild.title"
            >
              {{ descriptionItemChild.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="skills && skills.length > 0" class="flex pt-1 flex-wrap gap-2">
      <span
        v-for="skill of skills"
        :key="skill"
        class="text-sm whitespace-nowrap text-gray-600 dark:text-gray-400 border-2 rounded-lg border-gray-600 dark:border-gray-400 px-1"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
