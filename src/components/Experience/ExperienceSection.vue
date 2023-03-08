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
  <section>
    <div
      class="my-1 space-y-1 md:flex md:justify-between md:space-y-0 print:flex print:justify-between print:space-y-0"
    >
      <div>
        <h3 class="text-lg font-bold">
          <div>
            <span class="inline-block w-5 text-left text-blue-400">
              <i class="fa-solid fa-clipboard-user"></i>
            </span>
            <span>{{ title }}</span>
          </div>
          <div>
            <span
              class="inline-block w-5 text-left text-slate-700 dark:text-slate-300"
            >
              <i class="fa-solid fa-building"></i>
            </span>
            <span>
              <a
                v-if="companyUrl"
                :href="decorateUrl(companyUrl)"
                class="underline"
              >
                {{ companyName }}
              </a>
              <span v-else>{{ companyName }}</span>
            </span>
          </div>
        </h3>
      </div>
      <div class="text-gray-600 dark:text-gray-400 md:text-right">
        <div>
          {{ startDateString }}
          -
          {{ endDateString }}
        </div>
        <div>{{ location }}</div>
      </div>
    </div>
    <div class="my-2">
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
