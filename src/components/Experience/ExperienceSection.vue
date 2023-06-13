<script setup lang="ts">
import { decorateUrl } from '@/utils/urlUtils';
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  companyName: string;
  companyUrl?: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description?: string | string[];
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
  <section class="space-y-1">
    <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
      <div>
        {{ startDateString }}
        -
        {{ endDateString }}
      </div>
      <div>{{ location }}</div>
    </div>
    <h3 class="text-lg font-bold">
      <div>
        <span>
          <a v-if="companyUrl" :href="decorateUrl(companyUrl)">
            {{ companyName }}
          </a>
          <span v-else>{{ companyName }}</span>
        </span>
        <span> | </span>
        <span>{{ title }}</span>
      </div>
    </h3>
    <div>
      <ul
        v-if="Array.isArray(description)"
        class="list-disc list-outside pl-4 [hyphens:auto]"
      >
        <li v-for="descriptionItem of description" :key="descriptionItem">
          {{ descriptionItem }}
        </li>
      </ul>
      <p v-else-if="typeof description === 'string'">{{ description }}</p>
    </div>
    <div v-if="skills && skills.length > 0" class="pt-1 flex flex-wrap gap-2">
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
