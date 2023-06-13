<script setup lang="ts">
import type { Contact } from '@/types/resumeContent';
import { decorateUrl } from '@/utils/urlUtils';

defineProps<{ contact: Contact }>();
</script>

<template>
  <div>
    <ul class="space-y-2 whitespace-nowrap">
      <li class="space-x-2">
        <span class="inline-block w-4 h-4 text-[#ea4335] text-center">
          <i class="fa-solid fa-envelope"></i>
        </span>
        <a class="underline" :href="`mailto:${contact.email}`">
          {{ contact.email }}
        </a>
      </li>
      <li class="space-x-2">
        <span class="inline-block w-4 h-4 text-[#0072b1] text-center">
          <i class="fa-brands fa-linkedin"></i>
        </span>
        <a class="underline" :href="`${decorateUrl(contact.linkedin)}`">
          {{ contact.linkedin }}
        </a>
      </li>
      <li class="space-x-2">
        <span
          class="inline-block w-4 h-4 text-[#333333] dark:text-neutral-300 text-center"
        >
          <i class="fa-brands fa-github"></i>
        </span>
        <a class="underline" :href="`${decorateUrl(contact.github)}`">
          {{ contact.github }}
        </a>
      </li>
    </ul>
  </div>
</template>
